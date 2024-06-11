import React, { useState, useEffect } from 'react';
import { auth } from '@/Firebase/config'; // Ensure Firebase is correctly configured
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { FaSearch, FaMapMarkerAlt, FaSyncAlt, FaHeart, FaShoppingCart, FaUser, FaBars, FaChevronDown, FaTimes,FaPhoneAlt } from 'react-icons/fa';
import logo from './images/logo.webp';
import Image from 'next/image';
import { IoFlashSharp } from "react-icons/io5";
import { CgTrack } from "react-icons/cg";
import Link from 'next/link'; // Import the Link component from Next.js

const Header = () => {
  const [user, setUser] = useState(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({ about: false, shop: false, vendors: false, blog: false });

  const toggleDropdown = (menu) => {
    setDropdownOpen(prev => ({ ...prev, [menu]: !prev[menu] }));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      {/* Main Header */}
      <header className="hidden py-4 bg-white md:block pl-[30px] pr-[30px]">
        <div className="container flex items-center justify-between px-4 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src={logo} alt="Logo" className="w-[150px] h-12 bg-black" />
            </Link>
          </div>

          {/* Search and Dropdowns */}
          <div className="relative z-10 flex items-center flex-1 mx-16">
            <select className="px-4 py-2 border rounded-lg h-[40px] w-[150px]">
              <option value="all">All Categories</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
            <input
              type="text"
              className="py-3 pl-4 pr-4 border-t border-b border-r h-[40px] w-[390px] rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search for items..."
            />
            <div className="absolute inset-y-0 right-[90px] flex items-center pr-3 pointer-events-none">
              <FaSearch className="text-gray-500" />
            </div>
          </div>

          {/* Location and Icons */}
          <div className="items-center hidden space-x-6 md:flex">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <select className="px-4 py-2 ml-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-[40px]">
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
            </div>
            <Link href="/compare" className="flex items-center space-x-2 hover:text-green-500">
              <FaSyncAlt />
              <span>Compare</span>
            </Link>
            <Link href="/wishlist" className="flex items-center space-x-2 hover:text-green-500">
              <FaHeart />
              <span>Wishlist</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-2 hover:text-green-500">
              <FaShoppingCart />
              <span>Cart</span>
            </Link>
            {user ? (
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-500" />
                <span>{user.displayName || user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/Authoption" className="flex items-center space-x-2 hover:text-green-500">
                <FaUser />
                <span>Account</span>
              </Link>
            )}
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden bg-white border-t border-b border-gray-200 md:block pl-[30px] pr-[30px]">
        <div className="container flex items-center justify-between p-4 mx-auto">
          <div className="relative flex space-x-8">
            <Link href="/" className="font-bold hover:text-green-500">Home</Link>
            <div className="relative">
              <button onClick={() => toggleDropdown('about')} className="flex items-center font-bold hover:text-green-500 focus:outline-none">
                About <FaChevronDown className="relative ml-2 top-1" />
              </button>
              {dropdownOpen.about && (
                <div className="absolute left-0 z-20 mt-2 bg-white border rounded shadow-lg">
                  <Link href="/about/our-story" className="block px-4 py-2 hover:bg-gray-100">Our Story</Link>
                  <Link href="/about/team" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
                  <Link href="/about/careers" className="block px-4 py-2 hover:bg-gray-100">Careers</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('shop')} className="flex items-center font-bold hover:text-green-500 focus:outline-none">
                Shop <FaChevronDown className="relative ml-1 top-1" />
              </button>
              {dropdownOpen.shop && (
                <div className="absolute left-0 z-20 mt-2 bg-white border rounded shadow-lg">
                  <Link href="/shop/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                  <Link href="/shop/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                  <Link href="/shop/kids" className="block px-4 py-2 hover:bg-gray-100">Kids</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('vendors')} className="flex items-center font-bold hover:text-green-500 focus:outline-none">
                Vendors <FaChevronDown className="relative ml-1 top-1" />
              </button>
              {dropdownOpen.vendors && (
                <div className="absolute left-0 z-20 mt-2 bg-white border rounded shadow-lg">
                  <Link href="/vendors/vendor1" className="block px-4 py-2 hover:bg-gray-100">Vendor 1</Link>
                  <Link href="/vendors/vendor2" className="block px-4 py-2 hover:bg-gray-100">Vendor 2</Link>
                  <Link href="/vendors/vendor3" className="block px-4 py-2 hover:bg-gray-100">Vendor 3</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => toggleDropdown('blog')} className="flex items-center font-bold hover:text-green-500 focus:outline-none">
                Blog <FaChevronDown className="relative ml-1 top-1" />
              </button>
              {dropdownOpen.blog && (
                <div className="absolute left-0 z-20 mt-2 bg-white border rounded shadow-lg">
                  <Link href="/blog/latest-posts" className="block px-4 py-2 hover:bg-gray-100">Latest Posts</Link>
                  <Link href="/blog/news" className="block px-4 py-2 hover:bg-gray-100">News</Link>
                  <Link href="/blog/events" className="block px-4 py-2 hover:bg-gray-100">Events</Link>
                </div>
              )}
            </div>
            <Link href="/Contact" className="font-bold hover:text-green-500">Contact</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/order-tracking" className="flex items-center space-x-2 font-bold hover:text-green-500">
              <CgTrack size={22} />
              <span>Order Tracking</span>
            </Link>
            <Link href="/flash-sale" className="flex items-center space-x-2 font-bold hover:text-green-500">
              <IoFlashSharp />
              <span>Flash Sale</span>
            </Link>
           <Link href="/todays-deal" className="flex items-center space-x-4">
              <span className='font-bold text-red-700'>Today's Deal</span>
            </Link>
            <div className="flex items-center space-x-2">
              <select className="px-1 pl-[15px] py-1 w-[100px] h-[30px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-green-400">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <select className="px-2 pl-[15px] py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-white w-[70px] h-[30px] bg-green-400">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      {/* Top Banner */}
     <header className="flex items-center justify-between h-16 px-4 bg-lime-800 md:h-20 md:hidden">
      {/* Left side: Language and Currency selectors */}
      <div className="flex items-center space-x-4">
        <select className="px-2 py-1 text-white border-none rounded-md bg-black w-[90px]">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
        <select className="px-2 py-1 text-white bg-black border-none rounded-md">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>

      {/* Right side: Phone icon and number */}
      <div className="flex items-center space-x-2 text-white">
        <FaPhoneAlt />
        <span>+919910213600</span>
      </div>
    </header>

      {/* Main Header */}
      <header className="flex items-center justify-between bg-white md:hidden">
        <div className="flex items-center p-4 space-x-2">
         
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[100px] h-12 bg-black" />
          </Link>
        </div>
        <div className="flex items-center p-4 space-x-4">
        {user ? (
              <div className="flex items-center space-x-2">
                <FaUser className="text-gray-500" />
                <span>{user.displayName || user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/Authoption" className="flex items-center space-x-2 hover:text-green-500">
                <FaUser />
                <span>Account</span>
              </Link>
            )}
          <Link href="/wishlist" className="hover:text-green-500">
            <FaHeart />
          </Link>
          <Link href="/cart" className="hover:text-green-500">
            <FaShoppingCart />
          </Link>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white md:hidden">
        <div className="flex items-center flex-1 mx-4 space-x-2">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <FaBars size={24} />
          </button>
          <select className="px-4 py-0 border rounded-lg h-[30px] w-[59px] relative left-2">
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full py-2 pl-5 pr-4 h-[30px] border-t border-b border-r rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search for items..."
            />
            <div className="absolute inset-y-0 flex items-center pr-1 pointer-events-none right-2">
              <FaSearch className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay and Sidebar */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity z-auto ${isOpen ? 'block' : 'hidden'}`}></div>
      <nav className={`fixed inset-y-0 left-0 w-4/5 bg-white overflow-y-auto transition-transform transform z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col p-4 space-y-4">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="focus:outline-none">
              <FaTimes size={24} />
            </button>
          </div>
          <div>
            <button onClick={() => toggleDropdown('about')} className="flex items-center justify-between w-full text-left hover:text-green-500 focus:outline-none">
              About <FaChevronDown />
            </button>
            {dropdownOpen.about && (
              <div className="pl-4">
                <Link href="/about/our-story" className="block hover:text-green-500">Our Story</Link>
                <Link href="/about/team" className="block hover:text-green-500">Team</Link>
                <Link href="/about/careers" className="block hover:text-green-500">Careers</Link>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleDropdown('shop')} className="flex items-center justify-between w-full text-left hover:text-green-500 focus:outline-none">
              Shop <FaChevronDown />
            </button>
            {dropdownOpen.shop && (
              <div className="pl-4">
                <Link href="/shop/men" className="block hover:text-green-500">Men</Link>
                <Link href="/shop/women" className="block hover:text-green-500">Women</Link>
                <Link href="/shop/kids" className="block hover:text-green-500">Kids</Link>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleDropdown('vendors')} className="flex items-center justify-between w-full text-left hover:text-green-500 focus:outline-none">
              Vendors <FaChevronDown />
            </button>
            {dropdownOpen.vendors && (
              <div className="pl-4">
                <Link href="/vendors/vendor1" className="block hover:text-green-500">Vendor 1</Link>
                <Link href="/vendors/vendor2" className="block hover:text-green-500">Vendor 2</Link>
                <Link href="/vendors/vendor3" className="block hover:text-green-500">Vendor 3</Link>
              </div>
            )}
          </div>
          <div>
            <button onClick={() => toggleDropdown('blog')} className="flex items-center justify-between block w-full text-left hover:text-green-500 focus:outline-none">
              Blog <FaChevronDown />
            </button>
            {dropdownOpen.blog && (
              <div className="pl-4">
                <Link href="/blog/latest-posts" className="block hover:text-green-500">Latest Posts</Link>
                <Link href="/blog/news" className="block hover:text-green-500">News</Link>
                <Link href="/blog/events" className="block hover:text-green-500">Events</Link>
              </div>
            )}
          </div>
          <Link href="/contact" className="block hover:text-green-500">Contact</Link>
          <Link href="/compare" className="block hover:text-green-500">Compare</Link>
          <Link href="/wishlist" className="block hover:text-green-500">Wishlist</Link>
          <Link href="/cart" className="block hover:text-green-500">Cart</Link>
          <Link href="/account" className="block hover:text-green-500">Account</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
