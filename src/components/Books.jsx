import { useState } from "react";
import Book from "./Book";
const Books = () => {
  const [books, setBooks] = useState([]);
  return (
    <div>
      <div className="lg:mt-24 mt-5 flex justify-center items-center">
        <h1 className="font-bold text-xl lg:text-4xl">Books</h1>
      </div>
      <div className="col-span-2 grid lg:grid-cols-2 gap-2"></div>
    </div>
  );
};

export default Books;
