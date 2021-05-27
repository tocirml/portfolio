import Project from '../components/Project';
import yugiImg from '../assets/yugioh.png';
import bnsImg from '../assets/bns-sim.png';
import weatherImg from '../assets/weather.png';

const ProjectsPage = () => {
  return (
    <>
      <h1 className="projects">Projects</h1>
      <Project
        title="Yugioh Deck Builder"
        imgUrl={yugiImg}
        description="Yugioh Card Game CRUD"
        link="https://powerful-sea-63953.herokuapp.com/card-list"
        githubLink="https://github.com/tocirml/yugioh-deck-builder"
        technologies="React, Redux, Webpack, Babel, HTML, SASS, JS, Jest, Enzyme, React Testing Library, json-server"
      />
      <Project
        title="Bns Ancient Simulator"
        imgUrl={bnsImg}
        description="Ancient System simulator for Blade & Soul"
        link="https://bns-ancient-simulator.netlify.app/"
        githubLink="https://github.com/tocirml/bns-ancient-simulator"
        technologies="React, Create-React-App, HTML, SASS, JS"
      />
      <Project
        title="Weather App"
        imgUrl={weatherImg}
        description="Weather Application, check weather forecast with your city Id"
        link="https://weather-app-tocirml.herokuapp.com/"
        githubLink="https://github.com/tocirml/weather-app"
        technologies="React, Create-React-App, HTML, SASS, JS"
      />
    </>
  );
};

export default ProjectsPage;
