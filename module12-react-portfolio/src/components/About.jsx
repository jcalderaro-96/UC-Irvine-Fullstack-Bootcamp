// src/components/AboutMe.jsx
import frogImg from '../assets/frog.png';

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>                                  {/* Section title */}
      <img
        src={frogImg}             // placeholder photo URL
        alt="Developer avatar"
      />
      <p> I’m a passionate and detail-oriented web developer with a strong foundation in front-end and full-stack technologies. </p>
      <p> I enjoy turning complex problems into intuitive, accessible user experiences. </p>
      <p> With hands-on experience in HTML, CSS, JavaScript, React, and modern development tools. </p>
      <p>  I’m constantly seeking opportunities to learn and grow.  {/* Replace with your bio */} </p>
    </section>
  )
}

export default AboutMe                                    // export AboutMe component

// end of file
