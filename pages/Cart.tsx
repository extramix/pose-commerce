import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cart() {
  return (
    <>
      <div className="hidden fixed p-5">
        <div className="mx-auto overflow-y-auto items-center justify-center">
          <Icon icon="feather:shopping-bag" width="100" height="100" />
        </div>
        <h2 className="text-2xl p-5">
          Looks like you haven&apos;t put anything in the bag yet.
        </h2>
        <span className="p-5">
          Don&apos;t worry, take your time to look at what we have{" "}
          <Link href="/" passHref>
            <span className="underline cursor-pointer">here</span>
          </Link>
        </span>
      </div>

      <div className="p-5 mx-8 justtify-center">
        <p className="font-medium mb-5">Shopping Bag</p>
        <div className="p-4 max-w-4xl bg-white rounded-lg border shadow-md sm:p-8 ">
          <div className="flow-root mx-auto">
            <ul role="list" className="mb-5 divide-y divide-gray-200 ">
              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-40 h-40 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    $320
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-500 ">
                    Del
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/products/2.jpeg"
                      alt="Leather Jacket"
                      width="40"
                      height="40"
                      layout="responsive"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    $320
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-500 ">
                    Del
                  </div>
                </div>
              </li>

              <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-40 h-40 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      Neil Sims
                    </p>
                    <p className="text-sm text-gray-500 truncate ">
                      email@windster.com
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    $320
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-500 ">
                    Del
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* Summary */}
          <div>
            <div className="text-xl">
              <span>Total: </span>
              <span className="font-semibold text-gray-900">$200</span>{" "}
              <div>
                <button
                  className=" bg-green-500 text-white font-medium
              py-3 px-10 rounded-2xl transition-opacity"
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
