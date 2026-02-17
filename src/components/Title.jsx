import React from 'react'

const Title = ({ title , desc }) => {
  return (
    <>
    <h2 className='text-3xl sm:etxt-5xl fint-medium'>{title}</h2>
    <p className='max-w-lg text-center ttext-gray-500 dark:text-white/75 mb-6'>{desc}</p>
      
    </>
  )
}

export default Title
