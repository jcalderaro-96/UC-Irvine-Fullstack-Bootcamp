// src/components/Resume.jsx

function Resume() {
  return (
    <section>
      <h2>Resume</h2>                                         {/* Section title */}
      <p>
        <a href="/resume.pdf" download>Click Here To Download My Resume</a> {/* Link to downloadable resume */}
      </p>
      <h3>Front-End Proficiencies</h3>                                  {/* Proficiencies heading */}
      <ul>
        <li>HTML</li>                                         {/* Skill */}
        <li>CSS</li>                                          {/* Skill */}
        <li>JavaScript</li>                                   {/* Skill */}
        <li>React</li>                                        {/* Skill */}
        <li>Node.js</li>                                      {/* Skill */}
        <li>Express</li>                                      {/* Skill */}
        <li>MongoDB</li>                                      {/* Skill */}
        <li>Git</li>                                          {/* Skill */}
      </ul>

            <h3>Back-End Proficiencies</h3>                                  {/* Proficiencies heading */}
      <ul>
        <li>Node.js</li>                                         {/* Skill */}
        <li>Express.js</li>                                          {/* Skill */}
        <li>RESTful API Development</li>                                   {/* Skill */}
        <li>MongoDB / Mongoose</li>                                        {/* Skill */}
        <li>SQL / PostgreSQL / MySQL</li>                                      {/* Skill */}
        <li>Server Deployment (Heroku, Netlify, etc.)</li>                                      {/* Skill */}
        <li>Working with third-party APIs</li>                                      {/* Skill */}
      </ul>

            <h3>Additional Skills & Traits</h3>                                  {/* Proficiencies heading */}
      <ul>
        <li>Typing speed: 125 WPM with 99% accuracy (www.typingtest.com/)</li>                                         {/* Skill */}
        <li>Strong problem-solving skills</li>                                          {/* Skill */}
        <li>Effective communication & collaboration</li>                                   {/* Skill */}
        <li>Agile methodologies familiarity (Scrum, Kanban)</li>                                        {/* Skill */}
        <li>Quick learner and adaptable</li>                                      {/* Skill */}
        <li>Passion for continuous learning</li>                                      {/* Skill */}
        <li>Debugging and troubleshooting proficiency</li>                       
      </ul>

                  <h3>Education & Certifications </h3>                                  {/* Proficiencies heading */}
      <ul>
        <li>2025 - University of California Irvine - Full Stack Web Development Program </li>                                         {/* Skill */}
        <li>2020 - Lambda School / Bloom Institute - Full Stack Web Development Program </li>                                          {/* Skill */}
        <li>2018 - University of California Berkeley - Full Stack Web Development Program </li>                                   {/* Skill */}                  
        <li>2014 - The Catholic University of America </li> 
      </ul>


    </section>
  )
}

export default Resume                                       // export Resume component

// end of file
