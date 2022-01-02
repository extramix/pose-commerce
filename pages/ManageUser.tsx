import React from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ManageUser() {
  onAuthStateChanged(auth, (user) => {
    const uid = user.uid;
    const email = user.email;
  });
  return (
    <div>
      {/* <p>{uid}</p>
            <p>{email}</p> */}
    </div>
  );
}
