import React from "react";
import { PaperClipIcon } from "@heroicons/react/20/solid";

const page = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div>
              <div className="px-4 sm:px-0">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Contact Us!
                </h3>
              </div>
              <form action="" method="post">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border-black border-2 px-3"
                    placeholder="john doe"
                  />
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border-black border-2 px-3"
                    placeholder="Example123@gmail.com"
                  />
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <label className="text-sm font-medium leading-6 text-gray-900">
                    Message
                  </label>
                  <textarea
                    className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 border-black border-2 px-3"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <button type="submit" className=" border-2 t text-gray-900 px-4 py-1 bg-violet-200 font-mono">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
