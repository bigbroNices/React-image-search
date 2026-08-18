import { useState } from "react";
import { categories } from "../data/categoryArray.jsx"

export function SuggestedCategoryRow({ getSuggestedCategoryImage }) {
  const [randomImages] = useState(() => {
    const shuffled = [...categories];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 6);
  });

  return (
    <div className='suggested-categories-row'>
      {

        randomImages.map((category) => {
          return (
            <button
              className='suggested-category-button'
              key={category}
              onClick={() => {
                getSuggestedCategoryImage(category)}
              }>
              {category}
            </button>
          )
        })
      }
    </div>
  )
}