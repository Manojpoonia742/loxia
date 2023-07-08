"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
const url =
 {/*Your Api here */}

const data=fetch(url)



export default async function Home() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
       
              {results.map((blogs) => (
                <div key={blogs.catagory} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <Image
                      src={blogs.imageSrc}
                      alt={blogs.imageAlt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 mt-5">
                    {blogs.catagory}
                  </span>
                  <h3 className="mt-4 text-base font-semibold  text-black-500">
                    <Link
                      href={`/Post/${blogs._id}?slug=1`}
                      className="text-gray-900"
                    >
                      <span className="absolute inset-0 " />
                      {blogs.title}
                    </Link>
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
