import { Col, Row } from 'react-bootstrap';

const Project = ({
  title,
  imgUrl,
  description,
  link,
  githubLink,
  technologies,
}) => {
  return (
    <Row className="my-5">
      <Col md={4} className="my-auto">
        <img className="w-100" src={imgUrl} alt="institute-logo" />
      </Col>
      <Col md={8}>
        <h2>{title}</h2>
        <div>{description}</div>
        <div>
          <a href={link}>Demo</a>
        </div>
        <div>
          <a href={githubLink}> Github</a>
        </div>
        <div>Technologies: {technologies}</div>
      </Col>
    </Row>
  );
};

export default Project;
