import React from 'react'
import TestimonialSlider from './Testimonial'

const About = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <div className='w-full h-10 bg-sec'>
          <h2 className='text-xl max-md:text-[14px] py-2 font-bold text-center'>Are you university or school for an online partnership?</h2>
        </div>
        <div className='w-full flex max-md:flex-col max-md:px-2 justify-between px-12  mt-10 items-center'>
          <div className='w-1/2 ml-12 max-md:ml-2 max-md:w-full flex flex-col gap-4'>
            <h2 className='h1  font-bold leading-[50px]'>
              Open a Mobile
              Accessories Store
              Online
            </h2>
            <p className='text-[26px] text-black '>
              Best Tips to Start an Online <br />
              Business
            </p>
            <button className="bg-main w-[110px]  text-White px-4 py-2    rounded-lg font-medium flex items-center gap-2 ">
              Shop now
            </button>
          </div>
          <div className='w-1/2 max-md:w-full max-md:mt-4'>
            <img src="img/same.png" className='w-full h-full object-contain' alt="" />
          </div>
        </div>
        <div className='w-full bg-sec px-52 max-md:px-4  justify-between  max-md:justify-center max-md:gap-10 flex py-4 mt-28'>
          <div className='w-auto'>
            <h2 className='h3 font-bold text-black'>
              870
            </h2>
            <p className='text-[16px]'>
              shops
            </p>
          </div>
          <div className='w-auto'>
            <h2 className='h3 font-bold text-black'>
              20,000+
            </h2>
            <p className='text-[16px]'>
              Users
            </p>
          </div>
          <div className='w-auto'>
            <h2 className='h3 font-bold text-black'>
              260
            </h2>
            <p className='text-[16px]'>
              Subscribes
            </p>
          </div>
          <div className='w-auto'>
            <h2 className='h3 font-bold text-black'>
              73,990
            </h2>
            <p className='text-[16px]'>
              Active
            </p>
          </div>
        </div>


      </div>

      <div className='w-full  mt-12'>
        <h2 className='h5 text-main text-center'>
          Why Choose Us
        </h2>
        <h2 className='mt-4 text-center font-bold h3 leading-tight'>
          Benifits of online buying <br />
          service with us
        </h2>
        <div className="mt-20  max-md:flex-wrap flex justify-between px-20 gap-4 max-md:px-4 ">
          <div className="w-[20%] max-md:w-[47%]  boxshadow bg-[#D9D9D9] px-4 py-4">
            <h2 className='h4 font-bold mt-12 '>Choose teaching </h2>
            <p className='text-black text-[12px] '>simply dummy text of the
              printing and typesetting
              industry. Lorem Ipsum has been
              the industry's</p>
          </div>
          <div className="w-[20%] max-md:w-[47%] boxshadow bg-[#D9D9D9] px-4 py-4">
            <h2 className='h4 font-bold mt-12 '>24/7 available </h2>
            <p className='text-black text-[12px] '>simply dummy text of the
              printing and typesetting
              industry. Lorem Ipsum has been
              the industry's</p>
          </div>
          <div className="w-[20%] max-md:w-[47%] boxshadow bg-[#D9D9D9] px-4 py-4">
            <h2 className='h4 font-bold mt-12 '>Whiteboard</h2>
            <p className='text-black text-[12px] '>simply dummy text of the
              printing and typesetting
              industry. Lorem Ipsum has been
              the industry's</p>
          </div>
          <div className="w-[20%] max-md:w-[47%] boxshadow bg-[#D9D9D9] px-4 py-4">
            <h2 className='h4 font-bold mt-12 '>Afterable price </h2>
            <p className='text-black text-[12px] '>simply dummy text of the
              printing and typesetting
              industry. Lorem Ipsum has been
              the industry's</p>
          </div>
        </div>
      </div>

      {/* content Section */}
      <div className='w-full px-20 max-md:px-8 flex justify-between max-md:flex-col mt-12'>
        <div className='w-[40%] max-md:w-full relative'>
          <img src="img/ab (1).jpg" className='w-[65%] z-[-1]  h-72' alt="" />
          <img src="img/ab4.webp" className=' absolute  w-24 rounded-full -bottom-10 right-[30%]' alt="" />
        </div>
        <div className='w-[60%] max-md:w-full mt-12'>
          <h2 className='h5 text-main '>
            Customer your product us
          </h2>
          <h2 className='mt-4  font-bold h3 leading-tight'>
            Personilized profeissional <br />
            online buying on your schedule
          </h2>
          <p className='text-black text-[14px] mt-5 leading-tight w-[60%] max-md:w-full'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a type
            specimen book.</p>
          <button className="bg-main w-[110px]  text-White px-4 py-2  mt-6  rounded-lg font-light flex items-center gap-2 ">
            GetStarted
          </button>
        </div>
      </div>
      {/* content Section part2 */}
      <div className='w-full px-20 max-md:px-8 flex max-md:flex-col justify-between mt-32 max-md:mt-10'>
      <div className='w-[40%] max-md:w-full'>
          <h2 className='h5 text-main '>
            Customer your product us
          </h2>
          <h2 className='mt-4  font-bold h3 leading-tight'>
            Personilized profeissional <br />
            online buying on your schedule
          </h2>
          <p className='text-black text-[14px] mt-5 leading-tight w-full'>s simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a type
            specimen book.</p>
          <button className="bg-main w-[110px]  text-White px-4 py-2  mt-6  rounded-lg font-light flex items-center gap-2 ">
            GetStarted
          </button>
        </div>
        <div className='w-[40%] max-md:w-full max-md:mt-10 relative '>
          <img src="img/ab (3).jpg" className='w-[47%] z-[-1] object-cover  h-60' alt="" />
          <img src="img/ab (2).jpg" className=' absolute  object-cover  w-[47%]   h-60 -bottom-10 right-[25%]' alt="" />
        </div>
      
      </div>
      <div className='w-full px-20 flex justify-between mt-20'>
        <TestimonialSlider />
      </div>
    </>
  )
}

export default About