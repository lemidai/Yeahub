import { RootState, useAppDispatch, useAppSelector } from '@/app/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export const useFilter = <T extends number>(
  selector: (state: RootState) => number[],
  action: ActionCreatorWithPayload<T>
) => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(selector);

  const onChange = (value: T) => {
    dispatch(action(value));
  };

  return { selected, onChange };
};
