/* eslint-disable react/prop-types */
const Book = ({ book }) => {
  const { bookId, image, bookName, author, category, rating, tags } = book;
  const [tag1, tag2] = tags.slice(0, 2);
  return (
    <a href={`/book/${bookId}`} className="block">
      <div className="card rounded-2xl h-full  bg-base-100 p-5 border">
        <figure className=" rounded-2xl  bg-[#F3F3F3]">
          <img src={image} alt="Shoes" className="max-w-80  max-h-56 p-6" />
        </figure>
        <div className=" w-full pt-5  ">
          <div className="flex mb-2">
            {/* Rendering first tag */}
            <span className="mr-2 bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-3xl text-xs">
              {tag1}
            </span>
            {/* Rendering second tag */}
            <span className="mr-2 bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-3xl text-xs">
              {tag2}
            </span>
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="border-b border-dashed pb-4 w-full ">By: {author}</p>
          <div className="card-actions  pt-4 w-full justify-between">
            <div className="">{category}</div>
            <div className="flex">
              <span className="mr-2">{rating}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Book;
