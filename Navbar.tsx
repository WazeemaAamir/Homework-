import React from 'react'
import Image from 'next/image'; // Ensure Image is imported
import { Sofa } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
    return(
            <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-[144px]">
            <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
            <div className="flex justify-end p-5 w-fill">
                <Sofa />
            </div>
            <p className="text-bold ">Comfortly</p>
            <div className="text-center flex-1">
            <nav className="hidden md:flex space-x-8 items-center">
             <a href="a" className="text-slate-600 hover:text-black underline">Home</a>
             <a href="a" className="text-slate-600 hover:text-black">Shop</a>
             <a href="a" className="text-slate-600 hover:text-black">Product</a>
            <a href="a" className="text-slate-600 hover:text-black">About</a>
            </nav>
            </div>
            <div>
            <p>WELCOME TO CHAIRY</p>
            <h1>Best Furniture Collection For Your Interior
            </h1>
            <Image
            src = "/images/a.jpg"
            width = { 300 } // Provide width and height
            height = { 240 }
            alt = "Welcome image"
            />
            <button>Shop Now</button>
            <Image 
               src="/images/b.jpg" 
               width={300} // Provide width and height
               height={240} 
              alt="Library Stool Chair"
              />
             <p>Library Stool Chair </p>
             <span > $120 </span> 
             <ShoppingCart />
            </div>
            </div>
            </header>
        )
};

