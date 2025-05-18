import React from 'react'
import Profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <section id='about'
      className='py-4 px[7vw] md:px-[7vw] lg:px-[20vx] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Madhumita Y. Sugandhi
          </h1>
          <p className='text-base sm:text-lg md:text-lg text-gray-400 mg-10 mt-9 leading-relaxed'>
            Enthusiastic Full Stack Developer with a Master’s in Computer Applications, skilled in building modern web applications using React, Node.js, Express, and MongoDB. Passionate about clean code and responsive design. Quick to learn, collaborative by nature, and eager to contribute to impactful development teams.
          </p>
          <a href='https://www.canva.com/design/DAGMG_dXrRQ/vKmosP6IrrzGiH_dCcFgZw/view?utm_content=DAGMG_dXrRQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=ha436c3e098' target='_blank' rel='noopener noreferrer' className='inline-block  text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            VIEW RESUME
          </a>
        </div>
        <div className="md:w-1/2 flex justify-around md:justify-end">
            <img src={Profile}
            alt='Madhumita Sugandhi'
             className="  w-[200px] 
    sm:w-[270px] 
    md:w-[400px] 
    rounded-full 
    object-cover 
    mx-auto 
    drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"/>
        </div>
      </div>
    </section>
  )
}

export default About