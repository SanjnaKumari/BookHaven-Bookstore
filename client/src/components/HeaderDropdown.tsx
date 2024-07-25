
import '../assets/css/HeaderDropdown.css';
import {Link, useParams} from 'react-router-dom';
import {CategoryItem} from "../types";
import React, {useContext} from "react";
import {Category} from "../context/CategoryContext";


function HeaderDropdown() {
    const {id} = useParams();
    const catItem = useContext<CategoryItem[]>(Category);  // add this statment
    return (
        <div className="categories-dropdown">
            {catItem.map((item) => (
                <button className="categories-list" key={item.name.toLowerCase()}>
                    {/*<Link to={`/categories/${item.name.toLowerCase()}`} className="category-link">*/}
                    {/*    {item.name}*/}
                    {/*</Link>*/}
                    <Link to={`/categories/${item.name.toLowerCase()}`}
                          className={`category-link ${item.name.toLowerCase() === id ? 'selected-link' : ''}`}>
                        {item.name}
                    </Link>
                </button>
            ))}
        </div>

    )
}

export default HeaderDropdown

