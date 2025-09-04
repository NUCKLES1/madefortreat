import React from 'react'
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='lg:h-screen max-sm:pb-20'>
        <div>
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="w-full h-auto max-sm:h-[80vh] max-sm:object-fill object-cover"/>
          </div>
          <div className='-mt-100'>
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <h1 className='text-6xl'>Best food <br />for your taste</h1>
                <p>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven.</p>
            </div>
            <div className='flex items-center justify-center mt-8 gap-4'>
                <button className='bg-[#AD343E] py-1.5 px-3 rounded-3xl'>Book an Order</button>
                <button className='border-2 border-black py-1.5 px-3 rounded-3xl'>Book an Order</button>
            </div>
          </div>
    </div>
  )
}

export default Hero