import { useEffect } from 'react';
import ReactGa from 'react-ga';

const HomePage = () => {
  useEffect(() => {
    ReactGa.initialize('UA-196400719-1');
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <>
      <div className="display-1">Hola!</div>
      <h1 className="display-1">
        I'm <strong className="text-primary">Roberto Muñoz</strong>
      </h1>
      <h2>
        {'<>   '} I'm a Web Developer{'   </>'}
      </h2>
      <p className="desc text-center my-5">
        Passionate for videogames and technologies. Graduated from Universidad
        Nacional de Costa Rica with a Bachelor degree in Information Systems
        Engineering. I have years of experience with coding on different
        languages, using developing tools and finding solutions for software
        problems. Experienced with HTML, CSS, Javascript, Ruby on Rails and
        React and capability of learning new languages, frameworks and tools.
      </p>
    </>
  );
};

export default HomePage;
