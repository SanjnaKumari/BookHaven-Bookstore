import   '../types';
import '../assets/css/CategoryBookList.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {BookItem} from "../types";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
function CategoryBookList() {
    const {id } = useParams();
    const [books, setBooks]  = useState([]);

    useEffect(() => {
        axios.get(`http://webdev.cs.vt.edu:8080/SanjnaBookstoreReactTransact/api/categories/name/${id}/books/`)
            .then((result) => setBooks(result.data ))
            .catch(console.error);
    }, [id]);
  return (
      <>
          <div className="category-body">
              <CategoryNav />
                  <ul className="book-lists">
                  {books.map((book: BookItem) => (
                      <CategoryBookListItem bookId={book.bookId} isPublic={book.isPublic} price={book.price}
                                            title={book.title} author={book.author} categoryId={book.categoryId}/>))}
                  </ul>
          </div>
      </>
  )
}

export default CategoryBookList;
