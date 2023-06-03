import React from 'react'
import { useParams,useOutletContext } from 'react-router-dom'
const Book = () => {
  const {id}=useParams();
  const obj=useOutletContext();

  return (
    <div>
    <h1>Book {id}  {obj.hello}</h1>
    </div>
  )
}

export default Book
