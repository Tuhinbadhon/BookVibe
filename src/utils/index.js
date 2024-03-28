import toast from "react-hot-toast";

export const getBlogs = () => {
  let blogs = [];
  const storedBlogs = localStorage.getItem("blogs");
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs);
  }
  return blogs;
};
export const saveBlog = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked!");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("Blog Bookmarked Successfully!");
};

export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaining = blogs.filter((b) => b.id !== id);
  localStorage.setItem("blogs", JSON.stringify(remaining));
  toast.success("Blog Removed from Bookmark!");
};
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const getWishBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("wishBooks");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};

export const saveBook = (book) => {
  let books = getBooks() || [];
  let wishBooks = getWishBooks() || [];

  const isExist = books.find((b) => b.bookId === book.bookId);
  const isWishExist = wishBooks.find((b) => b.bookId === book.bookId);

  if (isExist) {
    return toast.error("Book already exists in read list!");
  }

  if (isWishExist) {
    wishBooks = wishBooks.filter((b) => b.bookId !== book.bookId);
    localStorage.setItem("wishBooks", JSON.stringify(wishBooks));
    toast.error("Book removed from wishlist!");
  }

  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book added to read list successfully!");
};

export const saveWishBook = (wishBook) => {
  let wishBooks = getWishBooks() || [];

  const isExist = wishBooks.find((b) => b.bookId === wishBook.bookId);
  if (isExist) {
    return toast.error("Book already exists in wishlist!");
  }

  wishBooks.push(wishBook);
  localStorage.setItem("wishBooks", JSON.stringify(wishBooks));
  toast.success("Book added to wishlist successfully!");
};
