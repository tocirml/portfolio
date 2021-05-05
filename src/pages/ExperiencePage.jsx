import Experience from '../components/Experience';
import bcd from '../assets/bcd.jpg';
import dino from '../assets/dino.png';

const ExperiencePage = () => {
  return (
    <>
      <h1 className="experience">Work Experience</h1>
      <Experience
        company="Dino It"
        date="Dec 2014 - Aug 2019"
        position="Fullstack Web Developer"
        imgUrl={dino}
        description="Teamwork, Communication, Group Presentations
      • Support for community.spiceworks.com
      • Both Frontend and Backend problem solving tasks
      • Use of REST APIs
      • Migrating EmberJS to RoR Frontend
      • Code reviewing, pair programming
      • Bug / Debug fixing tasks
• Support for Spiceworks web app (spiceworks.com)
Tools/Tecnologies Git, Gitlab, Sublime, Atom, VScode, Javascript, HTML, CSS, SASS,
EmberJS, RubyOnRails, Ruby, BackboneJS, NodeJS, Tests, Postman, Redis, , Multibrowser
support, Google Analytics, Agile/Scrum"
      />
      <Experience
        company="BCD Travel"
        date="Oct 2012 - Nov 2014"
        position="COMPLEAT Developer"
        imgUrl={bcd}
        description="Develop medium level complexity requests
      • Collaborate with other technology teams and/or suppliers to develop best practices
      and technology solutions
      • Strong analytical and problem solving
      • Proficient project management knowledge"
      />
    </>
  );
};

export default ExperiencePage;
