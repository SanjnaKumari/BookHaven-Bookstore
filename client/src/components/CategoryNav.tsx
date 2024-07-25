import '../assets/css/CategoryNav.css'
import React, {useContext} from 'react';
import {CategoryItem} from "../types";
import {Link, useLocation, useParams} from 'react-router-dom';
import { Category } from '../context/CategoryContext';

interface Category {
    categoryId: number;
    name: string;
}
function CategoryNav() {


    // const location = useLocation();
    // const currentPath = location.pathname;
    const {id} = useParams();
    const catItem = useContext<CategoryItem[]>(Category);  // add this statment
        return (


            <div className="category-body-first-section">
                {catItem.map((item: Category) => (
                    <button
                        key={item.categoryId}
                        className={`category-side-nav ${item.name.toLowerCase() === id ? 'selected' : ''}`}
                    >
                        <Link to={`/categories/${item.name.toLowerCase()}`}
                              // className={`category-link ${currentPath.includes(`/categories/${item.name.toLowerCase()}`) ? 'selected-link' : ''}`}>
                            className={`category-link ${item.name.toLowerCase() === id ? 'selected-link' : ''}`}>
                            {item.name}
                        </Link>
                    </button>
                ))}
            </div>

        )

}

export default CategoryNav;

