import { Link, useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const blogs = useLoaderData();
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
    <section className="  lg:mx-28 lg:mt-12 mx-4 mb-3 lg:mb-24 mt-3">
      <Helmet title="Blogs" />
      <div className="container max-w-6xl py-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          to={`/blog/${blogs[0]?.id}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
        >
          <img
            src={blogs[0]?.cover_image}
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 "
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs[0]?.title}
            </h3>
            <span className="text-xs ">
              {new Date(blogs[0]?.published_at).toLocaleDateString()}
            </span>
            <p>{blogs[0]?.description}</p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1, 19).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
