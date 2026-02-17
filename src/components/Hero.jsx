import React from 'react'
import assets from '../assets/assets'

const Hero = () => {
  return (
    
    <div id='hero' className=' flex flex-col items-center gap-6 py-20 px-4 sm:px-12 
    lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" />
            <p className='text-xs font-medium '>Trusted by 10k+ people</p>
        </div>
        
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium
        xl:leading-23.75  max-w-5xl'>
            Turning imagination into <span className='bg-linear-to-r from-[#5044E5]
        to-[#4d8cea] bg-clip-text text-transparent'>
             Digital </span> impact.</h1>

             <p className=' text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
              Creating meaningful connections and turning big ideas into interactive digital experiences.</p>

              <div className='relative'>
                <img src={assets.hero_img} alt="Hero Image" className='w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="" className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden'/>
              </div>
    </div>
  )
}

export default Hero 








// import React from 'react'
// import assets from '../assets/assets'

// const Hero = () => {
//   return (
//     <div
//       id="hero"
//       className="relative flex flex-col items-center gap-6 py-20 px-4 sm:px-12
//       lg:px-24 xl:px-40 text-center w-full overflow-hidden
//       text-gray-700 dark:text-white"
//     >

//       {/* ⭐ DARK MODE PREMIUM GLOW */}
//       <div className="hidden dark:block absolute inset-0 -z-10">
        
//         {/* Center radial glow */}
//         <div className="absolute top-1/2 left-1/2
//           w-225 h-225
//           -translate-x-1/2 -translate-y-1/2
//           bg-[radial-gradient(circle,rgba(79,70,229,0.25)_0%,rgba(0,0,0,0)_60%)]
//           blur-3xl">
//         </div>

//         {/* Extra color accents */}
//         <div className="absolute top-[10%] left-[15%]
//           w-125 h-125
//           bg-purple-500/20 blur-[120px] rounded-full">
//         </div>

//         <div className="absolute bottom-[5%] right-[15%]
//           w-125 h-125
//           bg-blue-500/20 blur-[120px] rounded-full">
//         </div>

//       </div>

//       {/* Trusted badge */}
//       <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
//         <img className="w-20" src={assets.group_profile} alt="" />
//         <p className="text-xs font-medium">Trusted by 10k+ people</p>
//       </div>

//       {/* Heading */}
//       <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px]
//       font-medium xl:leading-23.75  max-w-5xl">
//         Turning imagination into{" "}
//         <span className="bg-linear-to-r from-[#5044E5] to-[#4d8cea]
//         bg-clip-text text-transparent">
//           Digital
//         </span>{" "}
//         impact.
//       </h1>

//       {/* Subtitle */}
//       <p className="text-sm sm:text-lg font-medium text-gray-500
//       dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
//         Creating meaningful connections and turning big ideas into
//         interactive digital experiences.
//       </p>

//       {/* Image */}
//       <div className="relative">
//         <img
//           src={assets.hero_img}
//           alt="Hero Image"
//           className="w-full max-w-6xl"
//         />
//         <img
//           src={assets.bgImage1}
//           alt=""
//           className="absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-10 dark:hidden"
//         />
//       </div>
//     </div>
//   )
// }

// export default Hero

