import Education from '../components/Education';
import una from '../assets/una.png';

const EducationPage = () => {
  return (
    <>
      <h1 className="education">Education</h1>
      <Education
        institute="Universidad Nacional de Costa Rica"
        date="2005-2009"
        degree="Diploma in Informatic Applications Programming"
        imgUrl={una}
      />
      <Education
        institute="Universidad Nacional de Costa Rica"
        date="2009-2011"
        degree="Bachelor degree in Information Systems Engineering"
        imgUrl={una}
      />
    </>
  );
};

export default EducationPage;
