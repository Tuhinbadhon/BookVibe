import { useEffect, useState } from "react";
import Book from "./Book";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [bookLength, setBookLength] = useState(6);
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="lg:mt-20 mt-5 flex justify-center items-center">
        <h1 className="font-bold text-xl lg:text-4xl">Books</h1>
      </div>
      <div className="col-span-1 grid lg:grid-cols-3 gap-5 lg:mt-16 mt-5 ">
        {books.slice(0, bookLength).map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
      <div
        className={
          bookLength === books.length
            ? "hidden"
            : " mt-3 flex justify-center items-center"
        }
      >
        <button
          onClick={() => setBookLength(books.length)}
          className="px-3 py-2 lg:px-6 lg:py-3 rounded-lg lg:mt-12 mt-3 text-white bg-[#23BE0A]"
        >
          Show All Books
        </button>
      </div>
    </div>
  );
};

export default Books;
