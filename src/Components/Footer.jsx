import React from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { FaArrowRight, FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-sec mt-10 w-full text-white py-8 relative">
      <div className='w-full h-[1px] max-md:hidden bg-White top-[18%] absolute'>

      </div>
      <div className="  w-full ">
        <div className="flex w-full px-12 max-md:flex-wrap  ">
          <div className=" w-[60%] max-md:w-full flex-col justify-between flex mb-6 md:mb-0">
            <div>
            <h2 className="h5 font-bold">Your Gateway to Success Start</h2>
            <p className="mt-12">Here</p>
            <p className="flex items-center gap-4"><div className='w-6 h-6 flex justify-center items-center bg-main text-White rounded-full'><FaArrowRight className='text-[12px]' /></div> hello@fellowflow.com</p>
            </div>
            <div className="flex space-x-4 mt-4 ">
              <a href="#linkedin" className="hover:text-main text-gray  ">< FaYoutube  className='text-[22px] rounded-full'/></a>
              <a href="#twitter" className="hover:text-main text-gray  ">< FaLinkedin className='text-[22px] rounded-full' /></a>
              <a href="#facebook" className="hover:text-main text-gray  ">< FaSquareXTwitter className='text-[22px] rounded-full' /></a>
              <a href="#facebook" className="hover:text-main text-gray  ">< FaFacebookSquare  className='text-[22px] rounded-full'/></a>
            </div>
          </div>
          <div className="w-1/3 max-md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Pages</h3>
            <ul className="mt-8 space-y-2">
              <li><a href="#demo1" className="hover:text-main text-gray">Demo (sales)</a></li>
              <li><a href="#demo2" className="hover:text-main text-gray">Home</a></li>
              <li><a href="#demo2" className="hover:text-main text-gray">Services</a></li>
              <li><a href="#demo2" className="hover:text-main text-gray">About</a></li>
              <li><a href="#demo2" className="hover:text-main text-gray">Blog</a></li>
              <li><a href="#demo2" className="hover:text-main text-gray">Contact</a></li>
              <li><a href="#demo2" className="hover:text-main text-gray">Shop</a></li>
            </ul>
          </div>
          <div className=" w-1/4 max-md:1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Other</h3>
            <ul className="mt-8 space-y-2">
              <li><a href="#about1" className="hover:text-main text-gray">404</a></li>
              <li><a href="#about2" className="hover:text-main text-gray">Password</a></li>
              <li><a href="#about2" className="hover:text-main text-gray">Checkout</a></li>
              <li><a href="#about2" className="hover:text-main text-gray">Blog Details</a></li>
              <li><a href="#about2" className="hover:text-main text-gray">Work Details</a></li>
              <li><a href="#about2" className="hover:text-main text-gray">Shop Details</a></li>
            </ul>
          </div>
          <div className="w-1/4 max-md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Utility</h3>
            <ul className="mt-8 space-y-2">
              <li><a href="#other1" className="hover:text-main text-gray">Style Guide</a></li>
              <li><a href="#other2" className="hover:text-main text-gray">Licencing</a></li>
              <li><a href="#other2" className="hover:text-main text-gray">Change log</a></li>
              <li><a href="#other2" className="hover:text-main text-gray">Instructions</a></li>
            </ul>
          </div>
          <div className="w-1/4 max-md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold">Help</h3>
            <ul className="mt-8 space-y-2">
              <li><a href="#utility1" className="hover:text-main text-gray">All Templates</a></li>
              <li><a href="#utility2" className="hover:text-main text-gray">Supports</a></li>
            </ul>
          </div>
         
        </div>
        <div className="mt-8 border-t border-White pt-4 px-12 flex justify-between items-center">
          <div className="text-sm">© 2020 Powered by FellowFlow</div>
          <div className="text-sm">Buy this template for $10 USD</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
