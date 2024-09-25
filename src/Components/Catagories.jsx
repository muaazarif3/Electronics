import React from 'react'

const Catagories = ({txt , img}) => {
  return (
    <>
    
    <div class="lg:w-1/6 md:w-1/2 p-4 w-full boxshadow">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-contain object-center w-full h-full block" src= {img}/>
        </a>
        <div class="mt-4">
          <h2 class="text-gray-900 text-center title-font text-lg font-medium">{txt}</h2>
        </div>
      </div>
    </>
  )
}

export default Catagories