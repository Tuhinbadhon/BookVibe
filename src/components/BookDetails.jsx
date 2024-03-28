import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishBook } from "../utils";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  const [tag1, tag2] = book.tags.slice(0, 2);
  const handleReadlist = (book) => {
    saveBook(book);
  };
  const handleWishList = (book) => {
    console.log("clicked");
    saveWishBook(book);
  };
  return (
    <div className="lg:mx-28  lg:mt-12 mx-4 mb-3 lg:mb-24 mt-3">
      <div>
        <div className="lg:flex gap-3 lg:gap-12   ">
          <div className="">
            <div className="  lg:w-[500px] flex justify-center rounded-2xl border bg-[#1313130D]">
              <img
                src={book.image}
                alt="Album"
                className="lg:p-16 p-6 lg:min-h-[560px]  "
              />
            </div>
          </div>
          <div className="max-[450px]:mt-4 max-[450px]:mb-5 ">
            <h2 className="card-title font-bold lg:text-4xl">
              {book.bookName}
            </h2>
            <p className="border-b py-4 font-medium">By: {book.author}</p>
            <p className="border-b font-medium py-4">{book.category}</p>
            <p className="lg:max-w-[555px] lg:mb-7 mb-3 mt-3 lg:mt-6">
              <span className="font-bold">Review: </span>
              {book.review}
            </p>
            <div className="flex items-center border-b pb-6 mb-2">
              <span className="font-bold mr-4 ">Tag</span>
              {/* Rendering first tag */}
              <span className="mr-2 font-medium bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-3xl ">
                #{tag1}
              </span>
              {/* Rendering second tag */}
              <span className="mr-2 font-medium bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-3xl ">
                #{tag2}
              </span>
            </div>
            <div className="grid gap-2 lg:gap-3 ">
              <div className="flex gap-11">
                <span className="w-36">Number of Pages:</span>
                <span className="font-semibold  ">{book.totalPages}</span>
              </div>
              <div className="flex gap-11">
                <span className="w-36">Publisher:</span>
                <span className="font-semibold  ">{book.publisher}</span>
              </div>
              <div className="flex gap-11">
                <span className="w-36">Year of Publishing:</span>
                <span className="font-semibold  ">{book.yearOfPublishing}</span>
              </div>
              <div className="flex gap-11">
                <span className="w-36">Rating:</span>
                <span className="font-semibold  ">{book.rating}</span>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => handleReadlist(book)}
                className="lg:px-7 lg:py-4 px-5 py-2 font-semibold border border-solid border-[#59C6D2] rounded-lg"
              >
                Read
              </button>
              <button
                onClick={() => handleWishList(book)}
                className="lg:px-7 lg:py-4 px-5 py-2 font-semibold border border-solid text-white bg-[#50B1C9] border-[#59C6D2] rounded-lg"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
