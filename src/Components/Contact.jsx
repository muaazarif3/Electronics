import React from 'react';
import { CiMail } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <div className="px-8 flex items-center max-md:flex-col max-md:h-auto h-screen justify-center bg-gray-100 py-4 bg-sec">
            <div className='w-[40%] max-md:w-full'>
                <h2 className='h2 text-black'>Contact Us</h2>
                <p className='text-[14px] text-black mr-20'>
                     simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever
                    since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to
                    make a type specimen book
                </p>
                <div className='flex gap-4 items-center mt-7'>
                <CiMail />
                kashifhurmat893@gmaiLcom
                </div>
                <div className='flex gap-4 items-center mt-2'>
                <FaPhoneAlt />
                +92 302 5058 413
                </div>
            </div>
            <div className="bg-White p-8 rounded-2xl shadow-md w-[50%] max-md:w-full max-md:mt-8">
                <h2 className="text-black text-2xl md:text-3xl font-bold mb-6 ">We’d love to hear from you!
               <br /> Lets get in touch</h2>
                <form className="space-y-4">
                    <div className='flex justify-between gap-3'>
                        <input type="text" placeholder="Name" className="border-main border-[1px] rounded-lg p-2 w-[45%]" />
                        <input type="email" placeholder="Email" className="border-main border-[1px] rounded-lg p-2 w-[45%]" />
                    </div>
               
                    <div className='flex justify-between gap-2'>
                        <input type="password" placeholder="Password" className="border-main border-[1px] rounded-lg p-2 w-[45%]" />
                        <input type="tel" placeholder="Phone number" className="border-main border-[1px] rounded-lg p-2 w-[45%]" /> </div>
                   
                    <div>
                        <textarea placeholder="Type here" rows={5} className="border-main border-[1px] rounded-lg p-2 w-full"></textarea>
                    </div>
                    <button type="submit" className="bg-main text-White font-bold py-3 px-6 rounded hover:bg-main-dark focus:outline-none focus:shadow-outline transform active:scale-95 transition-transform duration-200  ease-in-out">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
