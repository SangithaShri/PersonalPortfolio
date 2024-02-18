import React from 'react'

const Contact = () => {
  const config = {
    email : 'sangithashri284@gmail.com',
    phone: '+91 9080790811'
}

  return <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl border-b-4 border-primary mb-5 w-[115px] font-bold'>Contact</h1>
        <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
        <p className='py-2'><span className='font-bold'>Email:</span>{config.email}</p>
        <p className='py-2'><span className='font-bold'>Phone:</span>{config.phone}</p>
    </div>
  </section>
}

export default Contact