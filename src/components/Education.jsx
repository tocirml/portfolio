import { Col, Row } from 'react-bootstrap';

const Education = ({ institute, date, degree, imgUrl }) => {
  return (
    <Row className="mt-5">
      <Col md={4} className="my-auto">
        <img className="w-100" src={imgUrl} alt="institute-logo" />
      </Col>
      <Col md={8}>
        <h2>{institute}</h2>
        <div className="mt-2">{date}</div>
        <div className="mt-2">{degree}</div>
      </Col>
    </Row>
  );
};

export default Education;
