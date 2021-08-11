import React from 'react';

const Category=({allCategories,filterItems})=>{
    return<><div className="ctg">
        {
            allCategories.map((category)=>{
                return<>
                    <button type="button" onClick={()=>filterItems(category)} className="filter-btn">{category}</button>
                </>
            })
        }
    </div></>
}

export default Category;