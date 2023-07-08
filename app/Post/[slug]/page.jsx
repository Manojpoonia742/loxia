
import React from "react";



const blogs=[{

}]

const page = ({ params }) => {
  return (
    <>
      {blogs
        .filter((item) => item._id === params.slug)
        .map((post) => {
          return (
            <section className="bg-gray-100">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                  <h1
                    className="text-2xl
             font-bold text-gray-900 py-1"
                  >
                    {post.title}
                  </h1>
                  <div className="content text-gray-900">
                    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 mb-8 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                      {post.catagory}
                    </span>
                  </div>
                  <div className="text-gray-900">
                  
                    <p className="py-3">{post.description}</p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </>
  );
};

export default page;
