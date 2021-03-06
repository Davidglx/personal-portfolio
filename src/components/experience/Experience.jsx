import React from 'react';
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'  />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>
                Experienced
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'   />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>
                Experienced
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>
                Experienced
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'  />
              <div>
              <h4>BootStrap</h4>
              <small className='text-light'>
                Comfortable
              </small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'  />
              <div>
              <h4>TypeScript</h4>
              <small className='text-light'>
                Comfortable
              </small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'   />
              <div>
              <h4>FireBase</h4>
              <small className='text-light'>
                Experienced
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'   />
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>
                Beginner
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'  />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>
                Beginner
              </small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'  />
              <div>
              <h4>My SQL</h4>
              <small className='text-light'>
                Beginner
              </small>
              </div>
              <div>
              </div>           
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill  className='experience__details-icon'  />
              <div>
              <h4>Phyton</h4>
              <small className='text-light'>
                Beginner
              </small>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience