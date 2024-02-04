import { getMeal } from '@/lib/meals';
import classes from './page.module.css';
import Image from 'next/image';

export default function MealDetails({ params }) {
  
  
  const meal = getMeal(params.slug);
  
  return <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image fill />
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}>
          by <a href={`mailto:${'EMAIL'}`}>Name</a>
        </p>
        <p className={classes.summary}>Summary</p>
      </div>
    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{
        __html: '...'
      }}></p>
    </main>
  </>
}