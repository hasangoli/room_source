import { Col, Row, Image } from "react-bootstrap";
import "../sass/about.scss";

const About = () => {
  return (
    <Row className="about g-0">
      <Col lg={3}>
        <Image
          src="./images/image-about-dark.jpg"
          className="about__image"
          fluid
        />
      </Col>
      <Col
        lg={6}
        className="about__content px-3 py-3 py-lg-0 d-lg-flex flex-column align-items-start justify-content-center"
      >
        <h5 className="about__content--title pt-5 pt-lg-2 pb-3 pb-lg-1 px-3 text-uppercase fw-bolder">
          About our furniture
        </h5>
        <p className="about__content--body px-3 pb-5 pb-lg-0 text-primary fw-bold">
          Our multifunctional collection blends design and function to suit your
          individual taste.Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </Col>
      <Col lg={3}>
        <Image
          src="./images/image-about-light.jpg"
          className="about__image"
          fluid
        />
      </Col>
    </Row>
  );
};

export default About;
