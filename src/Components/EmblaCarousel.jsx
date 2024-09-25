import React from 'react';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import { FaStar } from 'react-icons/fa';

const EmblaCarousel = (props) => {
    const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    return (
        <section className="embla">
            <div className='flex justify-between w-full items-center px-8'>
                <h2 className='h3 font-bold '>New Arrival</h2>
               <div className="embla__dots ">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
                    />
                ))}
            </div>
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide   p-4  boxshadow" key={index}>
                            <a class="block relative h-52 rounded overflow-hidden">
                                <img alt="ecommerce" class="object-contain object-center w-full h-full block" src={index.img} />
                            </a>
                            <div class="mt-4  flex w-full justify-between">
                                <p class=" text-black text-lg font-medium">{index.name}</p>
                                <div className='flex gap-2 items-center'><FaStar className='text-[#f5d742]' />
                                    <p className='text-black text-[14px]'>{index.rating} </p>
                                </div>
                            </div>
                            <p className='mt-1  text-gray text-[16px] text-left leading-6'>{index.txt}</p>
                            <div class="mt-4  flex w-full justify-between">
                                <p class="text-main txtShadow text-lg font-bold">{index.price}</p>
                                <button className="border-main border-[1px] w-[100px] text-[16px]  text-black   px-2     rounded-lg  flex justify-center items-center  ">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

         
        </section>
    );
};

export default EmblaCarousel;
