import React from 'react'

const Experience = () => {
  return (
    <section className='section-experience' id="experience">
        <div className="container">
            <div className='text-center' style={{paddingTop:'100px'}}>
                <h1 className='section-title'>Work Experience & Education</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className='experience row mb-5'>
                <div className="col-md-6 p-4">
                    <div class="vtl-timeline mt-5">
                        <div class="event">
                            <p class="text-">2017 - 2018</p>
                            <h3 class="text-accent">FullStack Web & Android Developer</h3>
                            <p className='text-'>Actus Global Management</p>
                        </div>
                        <div class="event">
                            <p class="date">2018 - 2019</p>
                            <h3 class="text-accent">Front End Developer</h3>
                            <p className='text-'>Synergy88 Digital</p>
                        </div>
                        <div class="event">
                            <p class="date">2019 - Present</p>
                            <h3 class="text-accent">Front End Developer</h3>
                            <p className='text-'>Information & Communication Technology iAcademy Inc.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 p-4">
                     <div class="vtl-timeline mt-5">
                        <div class="event">
                            <p class="text-">2013 - 2017</p>
                            <h3 class="text-accent">BS in Information Technology</h3>
                            <p className='text-'>Bulacan State University</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience