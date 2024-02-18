import React from 'react'
import Routine from '../assests/routine.png';
import Eventine from '../assests/eventine.png';
import Portfolio from '../assests/port.jpg';

const Projects = () => {

    const config = {
        projects : [
            {
                image: Routine,
                description: 'My routine for a week. Analyzed with Excel.',
                link: 'https://github.com/SangithaShri/Routine'
            },
            {
                image: Eventine,
                description: 'Events booking website. Developed with MERN stack.',
                link: 'https://github.com/SangithaShri/EVENTINE'
            },
            {
                image: Portfolio,
                description: 'Personal Portfolio. Developed with React and Tailwind CSS.',
                link: 'https://github.com/SangithaShri/PersonalPortfolio'
            }
        ]
    }

  return <section id='projects' className='flex flex-col py-16 px-5 justify-center bg-primary text-white'>
    <div className='w-full'>
        <div className='flex flex-col px-10 py-5'>
        <h1 className='text-3xl border-b-4 border-primary mb-5 w-[115px] font-bold'>Projects</h1>
        <p>Thses are my frontend projects. Check them out.</p>
        </div>
    </div>
    <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-12'>
        {config.projects.map((project) => (
                    <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
        ))}
        </div>
    </div>
  </section>
}

export default Projects
