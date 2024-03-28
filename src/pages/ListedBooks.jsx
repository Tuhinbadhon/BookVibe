import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "../components/Loader";
import { getBooks } from "../utils";
import ReadBooksCard from "../components/ReadBooksCard";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getBooks();
    setBooks(storeBooks);
  }, []);
  const [wishBooks, setWishBooks] = useState([]);
  useEffect(() => {
    const storeBooks = getBooks();
    setWishBooks(storeBooks);
  }, []);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Simulate a 1-second loader delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout); // Cleanup function
  }, []);

  if (isLoading || navigation.state === "loading") return <Loader />;

  return (
    <div className="lg:mx-28  lg:mt-12 mx-4 mb-3 lg:mb-24 mt-3">
      <div className="flex border  justify-center py-3 lg:py-8  rounded-2xl font-bold text-2xl bg-[#1313130D]">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center mt-4 lg:mt-8">
        <select className="select   select-success w-full max-w-52 lg:max-w-52 bg-[#23BE0A] text-white lg:font-semibold lg:text-lg border-none">
          <option disabled selected>
            Sort By
          </option>
          <option>Rating</option>
          <option>Number of Pages</option>
          <option>Publisher Year</option>
        </select>
      </div>
      <div className="mt-12">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className=" ">
              {books.map((book) => (
                <ReadBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className=" ">
              {wishBooks.map((book) => (
                <ReadBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
