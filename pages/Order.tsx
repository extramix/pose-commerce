import { Icon } from "@iconify/react";
import React from "react";

export default function Order() {
  return (
    <>
      <div className="p-5">
        <div className="my-5 mx-auto overflow-y-auto items-center justify-center">
          <Icon icon="feather:shopping-bag" width="100" height="100" />
        </div>

        <div className="justtify-center font-medium text-xl">Order Page</div>
      </div>
    </>
  );
}
