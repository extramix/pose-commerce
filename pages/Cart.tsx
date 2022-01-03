import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";

export default function Cart() {
  const router = useRouter();
  const [total, setTotal] = useState(0);
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  // const total = () => {
  //   console.log(price, q);
  //   console.log((parseInt(price.slice(1)) * parseInt(q)).toString());
  //   return (parseFloat(price) * parseFloat(q)).toString();
  // };

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(res);
    };

    getTotal();
  }, [cart]);

  const order = () => {
    router.push("/Order");
  };
  return (
    <>
      {/* {JSON.stringify(cart)} */}
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
              {cart.map((product) => {
                return (
                  <li className="py-3 sm:py-4" key={product.id}>
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          className="max-w-4xl"
                          src={product.img}
                          alt={product.name}
                          width="150"
                          height="200"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="mb-14">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate mb-7">
                            {product.description}
                          </p>
                        </div>

                        <div className="">
                          <p>
                            <label
                              htmlFor="countries"
                              className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 mr-1"
                            >
                              Size
                            </label>
                            <select
                              id="countries"
                              className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-12 p-1"
                            >
                              {product.size.map(() => {
                                for (const size in product.size) {
                                  return <option key={size}>{size}</option>;
                                }
                              })}
                            </select>
                          </p>
                          <p className="text-sm text-gray-900">
                            Quantity: {product.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex text-base font-semibold text-gray-900 ">
                        {/* {totalEachItem(product.price, product.quantity)} */}
                        ${product.price * product.quantity}
                      </div>
                      <div className="inline-flex text-base font-semibold text-gray-500 ">
                        <Icon
                          className="hover:text-red-500 cursor-pointer transition"
                          icon="bx:bx-trash"
                          width="20"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Summary */}
          <div>
            <div className="text-xl flex">
              <div className="mr-auto">
                <div>
                  <span>Total: </span>
                  <span className="font-semibold text-gray-900">
                    ${total}
                  </span>{" "}
                </div>
              </div>
              <div>
                <button
                  onClick={order}
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
