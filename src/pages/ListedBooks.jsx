import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "../components/Loader";
import { getBooks, getWishBooks } from "../utils";
import ReadBooksCard from "../components/ReadBooksCard";
import WishBooksCard from "../components/WishBooksCard";
// Import the ChartGraph component
import ChartGraph from "../components/ChartGraph";

const ListedBooks = () => {
  const [books, setBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const storeBooks = getBooks();
    setBooks(storeBooks);

    const storeWishBooks = getWishBooks();
    setWishBooks(storeWishBooks);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const sortBooks = (field) => {
    const sortedBooks = [...books].sort((a, b) => {
      if (a[field] < b[field]) return 1;
      if (a[field] > b[field]) return -1;
      return 0;
    });
    setBooks(sortedBooks);
  };

  const handleSortChange = (e) => {
    const selectedSortBy = e.target.value;
    setSortBy(selectedSortBy);
    sortBooks(selectedSortBy);
  };

  if (isLoading || navigation.state === "loading") return <Loader />;

  return (
    <div className="lg:mx-28 lg:mt-12 mx-4 mb-3 lg:mb-24 mt-3">
      <div className="flex border justify-center py-3 lg:py-8 rounded-2xl font-bold text-2xl bg-[#1313130D]">
        <h1>Books</h1>
      </div>
      <div className="flex justify-center mt-4 lg:mt-8">
        <select
          className="select select-success w-full max-w-52 lg:max-w-52 bg-[#23BE0A] text-white lg:font-semibold lg:text-lg border-none"
          onChange={handleSortChange}
          value={sortBy}
        >
          <option disabled value="">
            Sort By
          </option>
          <option value="rating">Rating</option>
          <option value="totalPages">Number of Pages</option>
          <option value="yearOfPublishing">Publisher Year</option>
        </select>
      </div>
      <div className="mt-12">
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
            <Tab>Pages to Read</Tab> {/* Add a new Tab */}
          </TabList>
          <TabPanel>
            <div>
              {books.map((book) => (
                <ReadBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              {wishBooks.map((book) => (
                <WishBooksCard key={book.bookId} book={book} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <ChartGraph readBooks={books} />{" "}
            {/* Render the ChartGraph component here */}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
