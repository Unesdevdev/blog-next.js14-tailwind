import React from 'react';
import Category from '../ui/CategoryCard';

import { getAllCategoriesCards } from '@/handlers/categoryHandler';
//
export const ShowAllCategoriesCards = () => {
  const categoriesCards = getAllCategoriesCards();
  return (
    <section className="mt-20">
      <h2 className="mb-20 text-6xl underline decoration-primary decoration-1 underline-offset-8 ">All Categories</h2>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-14  ">
        {categoriesCards.map((_, i) => (
          <div key={i} className={`row-span-1   p-4 ${i === 2 ? 'col-span-1 md:col-span-2' : ''} `}>
            <Category
              key={i}
              categorySlug={categoriesCards[i].categorySlug}
              categoryImg={categoriesCards[i].categoryImg}
              categoryImgAlt={categoriesCards[i].categoryImgAlt}
              categoryName={categoriesCards[i].categoryName}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
