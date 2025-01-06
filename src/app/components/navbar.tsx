"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Insta from "./socialmediaicons/insta";
import Facebook from "./socialmediaicons/facebook";
import Image from "next/image";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/3">
          <Bars3Icon
            className="h-16 w-10 cursor-pointer"
            onClick={toggleModal}
          />
        </div>

        <div className="w-2/5">
          <Image
            src="/logo.png"
            alt="DF Logo"
            width={2036}
            height={415}
            objectFit="contain"
            layout="responsive"
          />
        </div>

        <div className="w-1/3 flex justify-end space-x-4 text-xl">
          <Link href="https://instagram.com/dangerousfashionwa">
            <Insta />
          </Link>
          <Link href="https://facebook.com/dangerousfashionwa">
            <Facebook />
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Menu</h2>
            <p>This is where you can put your menu items.</p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
