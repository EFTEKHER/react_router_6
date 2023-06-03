import React from "react";
import { Link, Outlet } from "react-router-dom";
const BookLayout = () => {
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">NewBook</Link>
      <Outlet />
    </>
  );
};

export default BookLayout;
