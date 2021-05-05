import { Col, Row } from 'react-bootstrap';

const Experience = ({ company, date, position, imgUrl, description }) => {
  return (
    <Row className="my-5">
      <Col md={4} className="my-auto">
        <img className="w-100" src={imgUrl} alt="institute-logo" />
      </Col>
      <Col md={8}>
        <h2>{position}</h2>
        <div className="mt-2">{company}</div>
        <div className="mt-2">{date}</div>
        <div className="mt-2">{description}</div>
      </Col>
    </Row>
  );
};

export default Experience;
