// import { useEffect, useState } from 'react';
import styles from './MainPage.module.scss';
import { HeaderSection } from '@/widgets/LandingWidgets/HeaderSection/ui/HeaderSection';

export const MainPage = () => {
  // const [mentors, setMentors] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:3001/mentors')
  //     .then((res) => res.json())
  //     .then((data) => setMentors(data));
  // }, []);
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <HeaderSection />
        <div className={styles.item}>
          {/* {mentors.map((mentor) => (
            <li>
              <p>{mentor.name}</p>
              <img src={mentor.avatar} alt="" />
            </li>
          ))} */}
        </div>
        <div className={styles.item}>
          <h1>Headline main page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium dolore
            nulla quisquam aperiam ad inventore, repellendus consequatur pariatur asperiores!
          </p>
        </div>
        <div className={styles.item}>
          <h1>Headline main page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium dolore
            nulla quisquam aperiam ad inventore, repellendus consequatur pariatur asperiores!
          </p>
        </div>
        <div className={styles.item}>
          <h1>Headline main page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium dolore
            nulla quisquam aperiam ad inventore, repellendus consequatur pariatur asperiores!
          </p>
        </div>
        <div className={styles.item}>
          <h1>Headline main page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium dolore
            nulla quisquam aperiam ad inventore, repellendus consequatur pariatur asperiores!
          </p>
        </div>
        <div className={styles.item}>
          <h1>Headline main page</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium dolore
            nulla quisquam aperiam ad inventore, repellendus consequatur pariatur asperiores!
          </p>
        </div>
      </div>
    </main>
  );
};
