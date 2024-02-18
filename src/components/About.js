import React from 'react'
// import AboutImg from '../assests/about.png';

const About = () => {
  return <section className='flex flex-col md:flex-row bg-secondary px-10' id='about'>
    <div className='md:w-1/2 mt-4 mb-7 py-5'>
        <img src='https://countinggrowth.com/wp-content/uploads/2021/02/Asset-13-2048x996.png' />
    </div>
    <div className='md:w-1/2 flex justify-center pl-5'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-3xl border-b-4 border-[cadetblue] mb-5 w-[145px] font-bold'>About Me</h1>
        <p>Hi, my name is Sangitha Shri G. My interest in Data Science has inspired me to learn about Data Analysis and its tools. And I have some basic knowledge in Web development which helped me to develope projects.</p>
        <p className='pt-6'>I'm currently pursuing my Undergraduate degree in the stream of Information Technology.</p>
        <p className='pt-6 mb-4'>I'm proficient in Java, React.js, JavaScript, Excel, Python. Some of the tools I'm aware are Microsoft Excel, Eclipse, VS code, Microsoft Word, Power BI.</p>
        </div>
    </div>
  </section>
}

export default About