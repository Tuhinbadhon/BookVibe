import { useEffect, useState } from "react";
import Book from "./Book";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="lg:mt-24 mt-5 flex justify-center items-center">
        <h1 className="font-bold text-xl lg:text-4xl">Books</h1>
      </div>
      <div className="col-span-1 grid lg:grid-cols-3 gap-5 lg:mt-24 mt-5 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
