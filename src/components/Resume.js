import React from 'react'
import resume from '../assests/SANGITHA SHRI G.pdf'

const Resume = () => {
  const config = {
    link: resume,
}

  return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-10 py-10'>
    <div className='md:w-1/2 py-5 flex justify-center'>
        <img className='w-[400px]' src='https://img.freepik.com/free-vector/resume-concept-woman-makes-resume-vector-illustration-flat_186332-971.jpg?w=740' />
    </div>
    <div className='md:w-1/2 flex justify-center pl-5'>
        <div className='flex flex-col justify-center text-white'>
        <h1 className='text-3xl border-b-4 border-[cadetblue] mb-5 w-[115px] font-bold'>Resume</h1>
        <p className='py-5'>You can view my Resume. <a className='btn' href={config.link} download>Download</a> </p>
        </div>
    </div>
  </section>
}

export default Resume
