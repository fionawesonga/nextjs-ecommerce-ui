
'use client';
import Link from 'next/link';
import { FaMagnifyingGlass } from 'react-icons/fa6';
const Navbar = () => {
  return (
    <nav className="border border-gray-200 flex justify-between items-center p-4 bg-white text-black">
      <div className="font-bold text-[30px]">Exclusive</div>
      <ul className="flex space-x-4 text-[16px]">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        <li><Link href="/about" className="hover:underline">About</Link></li>
        <li><Link href= "/signup" className="hover:underline">Sign Up</Link></li>
      </ul>
      <div className="relative text-[12px]">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border border-gray-200 bg-gray-200 p-2 pr-10 rounded"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
          <FaMagnifyingGlass />
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
