import React from 'react'
import { useParams } from 'react-router-dom'
const Book = () => {
  const {id}=useParams();
  return (
    <div>
    <h1>Book {id}</h1>
    </div>
  )
}

export default Book
