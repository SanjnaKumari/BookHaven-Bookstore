import {createContext, useContext, useEffect, useState} from "react";
import {CategoryItem} from "../types";
import axios from "axios";

export const Category = createContext<CategoryItem[] | []>([]);   // creates a context called Category
Category.displayName = 'CategoryContext';


// @ts-ignore
function CategoryContext ({ children })  {
    const [categories, setCategories]  = useState([]);

    useEffect(() => {
        axios.get('http://webdev.cs.vt.edu:8080/SanjnaBookstoreReactTransact/api/categories')
            .then((result) => setCategories(result.data ))
            .catch(console.error);
    }, []);

    return (
        <Category.Provider value ={categories}>{children}</Category.Provider>
    );
}
export default CategoryContext;