/* eslint-disable react/prop-types */
import { RiMapPinLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const ReadBooksCard = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    category,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;
  const [tag1, tag2] = tags.slice(0, 2);
  return (
    <div className="border mt-5 p-5 rounded-2xl">
      <div className=" gap-7 flex    ">
        <div className="">
          <div className="lg:w-[200px]  flex justify-center rounded-2xl border bg-[#1313130D]">
            <img src={image} alt="Album" className="  py-7 px-12 " />
          </div>
        </div>
        <div className="max-[450px]:mt-4 max-[450px]:mb-5 ">
          <h2 className="card-title font-bold ">{bookName}</h2>
          <p className=" py-4 font-medium">By: {author}</p>
          <div className="flex items-center gap-5  mb-2">
            <div>
              {" "}
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
            <div className="flex justify-center items-center gap-1 ">
              <RiMapPinLine />
              <div>
                <span className="">Year of Publishing:</span>
                <span className=" ">{yearOfPublishing}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-5 border-b pb-4">
            <div className="flex gap-2 justify-center items-center ">
              <HiOutlineUsers />
              <div>
                <span className="">Publisher:</span>
                <span className="  ">{publisher}</span>
              </div>
            </div>
            <div className="flex gap-2 justify-center items-center  ">
              <IoDocumentTextOutline />
              <div>
                <span className="">Page</span>
                <span className="  ">{totalPages}</span>
              </div>
            </div>
          </div>

          <div className="mt-4  flex gap-5   justify-start items-baseline">
            <div>
              <p className=" px-5 py-2  rounded-full border border-solid text-[#328EFF] bg-[#328EFF26]">
                catagory: {category}
              </p>
            </div>
            <div className="flex ">
              <span className="px-5 py-2  rounded-full border border-solid text-[#FFAC33] bg-[#FFAC3326]">
                Rating: {rating}
              </span>
            </div>
            <Link to={`/book/${bookId}`}>
              <div className="flex gap-4 ">
                <button className=" px-5 py-2  rounded-full border border-solid text-white bg-[#23BE0A] ">
                  View Details
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksCard;
