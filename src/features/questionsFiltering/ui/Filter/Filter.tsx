import styles from './Filter.module.scss';
import clsx from 'clsx';
import { Skill } from '@/entities/skill/model/types';
import { useState } from 'react';
import { Specialization } from '@/entities/specialization';
import { RootState } from '@/app/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useFilter } from '@features/questionsFiltering/model/useFilter';

type FilterListType = Skill | Specialization;

type Props = {
  list: FilterListType[] | { id: number; title: string }[];
  title: string;
  selector: (state: RootState) => number[];
  action: ActionCreatorWithPayload<number>;
};

export const Filter = ({ list, title, selector, action }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selected, onChange } = useFilter(selector, action);

  const isOptionSelected = (id: number) => {
    return selected.includes(id);
  };

  return (
    <div>
      <h3 className={styles.filterTitle} onClick={() => setIsOpen((p) => !p)}>
        {title}
      </h3>
      <ul className={clsx(styles.filterList, isOpen && styles.isShowing)}>
        {list?.map((option) => (
          <li
            className={clsx(styles.filterOption, isOptionSelected(option.id) && styles.selected)}
            key={option.id}
            onClick={() => onChange(option.id)}
          >
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
