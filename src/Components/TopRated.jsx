import React from 'react'
import { CiHeart } from 'react-icons/ci'

const TopRated = ({txt , img, price }) => {
  return (
    <>
    
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full boxshadow">
        <div className='flex items-center w-full px-2 justify-between'>
            <p className='txtShadow text-[14px] text-gray '>Top Rated</p>
            <CiHeart className='text-[20px] text-gray font-bold' />
        </div>
        <a class="block relative h-52 rounded overflow-hidden">
          <img alt="ecommerce" class="object-contain object-center w-full h-full block" src= {img}/>
        </a>
        <div class="mt-4 px-6">
          <p class=" text-black text-lg font-medium">{txt}</p>
          <p class="text-main txtShadow text-lg font-bold">{price}</p>
        </div>
      </div>
    </>
  )
}

export default TopRated