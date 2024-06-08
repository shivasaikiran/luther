// components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import logo from './images/logo.webp'
import googleplay from './images/Screenshot 2024-06-08 111038.png'
import ios from './images/Screenshot 2024-06-08 111323.png'
import payment from './images/Screenshot 2024-06-08 111629.png'
import payment1 from './images/Screenshot 2024-06-08 111911.png'
import { FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Logo and Contact Info */}
          <div className="col-span-1">
            <Image src={logo} alt="Nest Logo" width={150} height={50} className="mb-4 bg-black" />
          
            <p className="flex items-center mb-2"><FaMapMarkerAlt size={30} className="mr-3" />B-2,Industrial Area,Udyog Kunj,Ghaziabad,Uttar Pradesh </p>
            <p className="flex items-center mb-2"><FaPhone className="mr-2" />+919910212600</p>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-2" />luthergroups4@gmail.com</p>
            <p className="flex items-center mb-2"><FaClock className="mr-2" /> 10:00 - 18:00, Mon - Sat</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">About Us</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Delivery Information</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Privacy Policy</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Terms & Conditions</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Contact Us</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Support Center</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Careers</span></Link></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Account</h3>
            <ul>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Sign In</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">View Cart</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">My Wishlist</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Track My Order</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Help Ticket</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Shipping Details</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Compare Products</span></Link></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Corporate</h3>
            <ul>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Become a Vendor</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Affiliate Program</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Farm Business</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Farm Careers</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Our Suppliers</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Accessibility</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Promotions</span></Link></li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Popular</h3>
            <ul>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Milk & Flavoured Milk</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Butter and Margarine</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Eggs Substitutes</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Marmalades</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Sour Cream and Dips</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Tea & Kombucha</span></Link></li>
              <li className="mb-2"><Link href="#"><span className="text-gray-600 hover:text-gray-800">Cheese</span></Link></li>
            </ul>
          </div>
          
          {/* Install App Section */}
          <div className="col-span-1 lg:col-span-1 ">
            <h3 className="mb-4 text-xl font-semibold ">Install App On</h3>
            <div className="flex mb-4 space-x-4 ">
              <Image src={googleplay} alt="App Store" width={90} height={40} />
              <Image src={ios} alt="Google Play" width={120} height={40} />
            </div>
            <h3 className="mb-4 text-xl font-semibold">Payment Methods</h3>
            <div className="flex space-x-4">
              <Image src={payment} alt="Visa" width={100} height={50} />
              <Image src={payment1} alt="MasterCard" width={100} height={50} />
              
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-8 mb-3 lg:flex-row">
          <div className="flex mb-4 space-x-4 lg:mb-0">
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Best prices & offers</span></Link>
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Free delivery</span></Link>
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Great daily deal</span></Link>
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Wide assortment</span></Link>
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Easy returns</span></Link>
          </div>
          <div className="flex space-x-4">
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Privacy Policy</span></Link>
            <Link href="#"><span className="text-gray-600 hover:text-gray-800">Terms of Use</span></Link>
          </div>
        </div>
      </div>
      <div className=" pt-7">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto lg:flex-row">
        <div className="flex items-center mb-4 space-x-4 lg:mb-0">
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-2xl text-green-500" />
            <div>
              <div className="font-bold text-green-700">1900 - 6666</div>
              <div className="text-gray-600">Working 8:00 - 22:00</div>
            </div>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="mr-2 text-2xl text-green-500" />
            <div>
              <div className="font-bold text-green-700">1900 - 8888</div>
              <div className="text-gray-600">24/7 Support Center</div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-xl font-semibold text-balck">Follow Us</div>
          <a href="#" className="text-green-500 hover:text-green-700">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-green-500 hover:text-green-700">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-green-500 hover:text-green-700">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-green-500 hover:text-green-700">
            <FaPinterest className="text-2xl" />
          </a>
          <a href="#" className="text-green-500 hover:text-green-700">
            <FaYoutube className="text-2xl" />
          </a>
        </div>
        
      </div>
      <div className="pt-4 mt-6 border-t">
        <div className="container px-4 mx-auto text-center text-gray-600">
          © {new Date().getFullYear()} Luther. All rights reserved.
        </div>
      </div>
      
    </div>
    
    </footer>
  );
}

export default Footer;
