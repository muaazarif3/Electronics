import React from 'react'
import Carousel from './Components/Carousel'
import Catagories from './Components/Catagories'
import { FaArrowRight, FaTag } from 'react-icons/fa'
import TopRated from './Components/TopRated'
import EmblaCarousel from './Components/EmblaCarousel'
import { IoPricetagOutline } from 'react-icons/io5'

const App = () => {

  const slides = [
    {
      img: 'img/arr1.png',
      name: 'iphone 16',
      price: '$49',
      txt: 'Headphones come with a variety of features.',
      rating: '5.0'
    },
    {
      img: 'img/cat1.png',
      name: 'iphone 15',
      price: '$55',
      txt: 'Headphones come with a variety of features.',
      rating: '4.0'
    },
    {
      img: 'img/arr2.png',
      name: 'Samsung',
      price: '$39',
      txt: 'Headphones come with a variety of features.',
      rating: '4.5'
    },
    {
      img: 'img/arr3.png',
      name: 'iphone 15 pro',
      price: '$69',
      txt: 'Headphones come with a variety of features.',
      rating: '3.4'
    },
    {
      img: 'img/cat4.png',
      name: 'Product 542',
      price: '$49',
      txt: 'Headphones come with a variety of features.',
      rating: '5.0'
    },
    {
      img: 'img/camera.png',
      name: 'Product 542',
      price: '$49',
      txt: 'Headphones come with a variety of features.',
      rating: '5.0'
    },
    {
      img: 'img/tablet.png',
      name: 'Product 542',
      price: '$49',
      txt: 'Headphones come with a variety of features.',
      rating: '5.0'
    },

  ]
  return (
    <>
      {/* hero */}
      <div className=" relative hero w-full h-[90vh] max-md:h-auto border-b-[1px] max-md:border-hidden border-black">
        <div className='h-[89%] w-[55%] bg-sec absolute top-[-14%] z-[-1] rounded-r-[100px] max-md:w-[90%]'>

        </div>
        <Carousel />
      </div>


      {/* feature */}
      <div className='w-full h-auto py-6'>
        <h2 className='text-5xl font-bold text-center my-10'>Feature's</h2>

        <div className='w-full bg-sec relative flex max-md:flex-col py-8 px-16 max-md:px-4'>
          <div className="h2Section flex  w-auto ml-20 max-md:ml-2">
            <h2 className='h1 font-bold vertical-text uppercase tracking-wide leading-[60px]    opacity-[0.80]'>Headphones</h2>
            <h2 className='h1 font-bold vertical-text uppercase tracking-wide leading-[60px]  opacity-[0.60]'>Headphones</h2>
            <h2 className='h1 font-bold vertical-text uppercase tracking-wide leading-[60px]  opacity-[0.40]'>Headphones</h2>
            <h2 className='h1 font-bold vertical-text uppercase tracking-wide leading-[60px]  opacity-[0.20]'>Headphones</h2>
            <h2 className='h1 font-bold vertical-text uppercase tracking-wide leading-[60px]  opacity-[0.10]'>Headphones</h2>
          </div>
          <div className="amazing m-auto">
            <h2 className='h2 mt-8 font-bold'>
              Amazing feature
            </h2>
            <div className='mt-4'>
              <p className='h5 font-semibold'>Touch Controls</p>
              <p className='text-gray w-[60%] text-[14px]'>Some headphones have touchsensitive surfaces for controlling
                playback</p>
            </div>
            <div className='mt-4'>
              <p className='h5 font-semibold'>Touch Controls</p>
              <p className='text-gray w-[60%] text-[14px]'>Some headphones have touchsensitive surfaces for controlling
                playback</p>
            </div>
            <div className='mt-4'>
              <p className='h5 font-semibold'>Touch Controls</p>
              <p className='text-gray w-[60%] text-[14px]'>Some headphones have touchsensitive surfaces for controlling
                playback</p>
            </div>
          </div>
          <img src="img/feature.png" className=' absolute w-[25%] max-md:w-[90%] max-md:-top-10  left-[10%]  h-auto' alt="" />
        </div>
      </div>
      {/* catagories */}
      <div className='w-full flex flex-col'>
        <h2 className='h3 text-main font-semibold text-center'>Catagory</h2>
        <h2 className='h3 text-black font-bold text-center max-md:h3'>Can we help you pick a headphone</h2>

        <div className='mt-6 flex max-md:flex-col px-16 justify-between'>
          <Catagories img={'/img/cat1.png'} txt={'Iphone'} />
          <Catagories img={'/img/cat2.png'} txt={'Laptop'} />
          <Catagories img={'/img/cat3.png'} txt={'Tablet'} />
          <Catagories img={'/img/cat4.png'} txt={'Speaker'} />
          <Catagories img={'/img/heroSlider.png'} txt={'Headphone'} />
        </div>
      </div>

      {/* 2 section */}

      <div className='w-full px-8 flex max-md:flex-col justify-between mt-12 gap-4'>
        <div className='w-1/2 flex  h-[45vh]  max-md:w-full items-center py-4 px-2 boxshadow'>
          <div className='w-[50%]  h-auto'>
            <img src="/img/camera.png" className='w-[90%] h-auto rotate-[-45deg]' alt="camerpng" />
          </div>
          <div className='w-[50%]'>
            <h2 className='h3 max-md:text-[20px] text-black font-extrabold'>
              25% off
            </h2>
            <p className='text-black text-[28px] max-md:text-[16px] max-md:leading-2 font-midum  leading-7 '>Catch hotest Deals on Cameras catagory</p>
            <button className="bg-main w-[130px]  text-White px-4 py-2  mt-4  rounded-lg font-medium flex items-center gap-2 ">
              Shop now <FaArrowRight className="mt-1 text-[14px]" />
            </button>
          </div>

        </div>
        <div className='w-1/2 flex  h-[45vh] items-center max-md:w-full py-4 pl-10 boxshadow'>
          <div className='w-[50%] h-auto'>
            <img src="/img/tablet.png" className=' w-[55%] h-auto ' alt="camerpng" />
          </div>
          <div className='w-[50%]'>
            <h2 className='h3 max-md:text-[20px] text-black font-extrabold'>
              25% off
            </h2>
            <p className='text-black text-[28px] font-midum max-md:text-[16px] max-md:leading-2  leading-7'>Tablets smartphone <br /><b>and more</b> </p>
            <button className="border-main border-[1px] w-[100px]  text-main  font-bold px-4   mt-4  rounded-lg h3 flex justify-center items-center gap-2 ">
              $799
            </button>
          </div>

        </div>
      </div>

      {/* top rated */}
      <div className='w-full flex flex-col mt-16'>
        <h2 className='h3 text-black font-bold text-center max-md:h3'>Top rateded product</h2>

        <div className='mt-6 flex max-md:flex-col px-8 gap-4'>
          <TopRated img={'img/top4.png'} txt={'LED 4k smart TV expoWhite/Gray/Black'} price={'$499'} />
          <TopRated img={'img/top1.png'} txt={'GM-2345 clossed back wireless Headphones'} price={'$99'} />
          <TopRated img={'img/heroSlider2.png'} txt={'GM-2345 clossed back wireless Headphones'} price={'$99'} />
          <TopRated img={'img/cat2.png'} txt={'Laptop 4k smart TV expo White/Gray/Black'} price={'$599'} />
        </div>
        <div className='mt-6 flex max-md:flex-col px-8 gap-4'>
          <TopRated img={'img/top2.png'} txt={'Mobile phone accessories'} price={'$199'} />
          <TopRated img={'img/top3.png'} txt={'Accessories for mobile phone used USB'} price={'$149'} />
          <TopRated img={'img/camera.png'} txt={'GM-2345 clossed back Camera'} price={'$299'} />
          <TopRated img={'img/tablet.png'} txt={'Mobile 4k smart TV expo White/Gray/Black'} price={'$399'} />
        </div>
      </div>

      {/* shop product byy */}

      <div className='w-full px-8 mt-8'>
        <h2 className='h3 font-bold text-black'>
          Shop product by
        </h2>
        <div className='w-full flex justify-center'>
          <div className='w-[75%] max-md:w-full max-md:flex-col h-[52vh] pb-12 bg-sec rounded-3xl max-md:h-auto flex mt-12 items-center'>
            <div className='w-1/2 max-md:w-full'>
              <img src="img/shopProduct.png" className='w-[90%] ' alt="" />
            </div>
            <div className='w-1/2 max-md:w-full px-6 flex flex-col gap-4'>
              <h2 className='h3 text-black font-bold leading-8'>Define yourself be <br />diffrent</h2>
              <p className='text-gray text-[14px] max-md:w-[90%] leading-tight font-medium w-[70%]'>These have large ear cups that encompass
                the ears, providing good sound isolation
                and often better sound quality</p>
              <button className="bg-main w-[130px]  text-White px-4 py-2    rounded-lg font-medium flex items-center gap-2 ">
                Shop now <FaArrowRight className="mt-1 text-[14px]" />
              </button>
            </div>
          </div>
        </div>

      </div>


      {/* new Arrival */}
      <div className='mt-16'>
        <EmblaCarousel slides={slides} options={{ loop: false }} />
      </div>

      {/* call to action */}
      <div className='w-full px-8 flex max-md:flex-col max-md:gap-6 justify-between mt-12'>
        <div className='w-[38%]  max-md:w-full h-auto max-md:flex-col bg-sec flex items-center py-12 rounded-3xl'>
          <img src="img/call1.png" alt="" />
          <div className='w-1/2 max-md:w-full flex ml-10 max-md:px-5 flex-col gap-4'>
            <h2 className='h2 text-black  font-bold leading-10'>Awsome <br />Airpods</h2>
            <p className='text-gray text-[14px] w-full leading-tight font-medium '>These have large ear cups that
              encompass the ears, providing
              good sounds</p>
            <button className="bg-main w-[130px]  text-White px-4 py-2    rounded-lg font-medium flex items-center gap-2 ">
              Shop now <FaArrowRight className="mt-1 text-[14px]" />
            </button>
          </div>
        </div>
        <div className='w-[58%] max-md:w-full h-auto bg-sec flex max-md:flex-col  items-center pl-12 py-12 rounded-3xl'>
          <div className='w-1/2 max-md:w-full flex flex-col gap-4'>
            <h2 className='h2 text-black font-bold leading-10'>Smart <br />Watches</h2>
            <button className="bg-main w-[170px]  text-White px-4 py-2  justify-between  rounded-lg font-medium flex items-center gap-2 ">
              Shop now <FaArrowRight className="mt-1 text-[14px]" />
            </button>
          </div>
          <div className='w-1/2 max-md:w-full'>

            <img src="img/call2.png" className='w-[80%] max-md:mt-8' alt="" />
          </div>
        </div>
      </div>

      {/* tag */}
      <div className='w-full py-8 bg-sec mt-12 relative'>
        <h2 className='h3 font-bold text-black text-center'>
          10% off when playing debit card
        </h2>
        <IoPricetagOutline className=' float-right text-4xl absolute right-4 bottom-[30%] max-md:text-2xl ' />
      </div>

      {/* last section */}

      <div className='w-full mt-12 relative px-8'>
        <div className='w-[60%] max-md:w-full flex flex-col'>
          <h2 className='h5 font-bold text-main'>Comment level</h2>
          <h2 className='h2  font-bold text-black'>A new style in your Ear</h2>
          <div className='flex flex-col w-full pl-12 max-md:pl-0 py-4 gap-4'>
            <div className='flex gap-10 max-md:gap-2 items-center'>
              <div className='w-52 max-md:w-44 h-auto px-8 py-5 rounded-2xl bg-sec text-center'>
                <h2 className='h2 text-main font-bold'>4M+</h2>
                <h2 className='h3 font-semibold text-black'>User's</h2>
              </div>
              <div className='w-52 max-md:w-44 h-auto px-8 max-md:gap-2 py-5 rounded-2xl bg-sec text-center'>
                <h2 className='h2 text-main font-bold'>153k</h2>
                <h2 className='h3 font-semibold text-black'>Purchaser</h2>
              </div>
            </div>
            <div className='flex gap-10 max-md:gap-2 items-center'>
              <div className='w-52 max-md:w-44 h-auto px-8 py-5 rounded-2xl bg-sec text-center'>
                <h2 className='h2 text-main font-bold'>53k</h2>
                <h2 className='h3 font-semibold text-black'>Gallery</h2>
              </div>
              <div className='w-52 max-md:w-44 h-auto px-8 py-5 rounded-2xl bg-sec text-center'>
                <h2 className='h2 text-main font-bold'>2M+</h2>
                <h2 className='h3 font-semibold text-black'>Feedback</h2>
              </div>
            </div>
          </div>
        </div>



        <img src="img/yo.jpg" className='w-[60%] absolute right-[-15%] top-[-20%] z-[-1] max-md:hidden' alt="" />

      </div>
    </>
  )
}

export default App