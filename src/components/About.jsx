import '../css/About.scss';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Negative from './Negative';
import cocktail1 from '../img/cocktailbar1.jpg';
import cocktail2 from '../img/cocktailbar2.jpg';
import cocktail3 from '../img/cocktailbar3.jpg';
import cocktail4 from '../img/cocktailbar4.jpg';
import cocktail5 from '../img/oldfashioned.avif';
import cocktail6 from '../img/cocktailbar2.avif';
import Positive from './Positive';




function About() {
  return (
    <>
    
    <Container className="mt-5">
    <Negative/>
    <Positive/>
      <Row className="align-items-center">
        {/* Sol tarafta yazı */}
        <Col md={6}>
          <h2 className="text-center mb-4">Plan B Cocktail Bar</h2>
          <p className="lead">
            Welcome to <strong>Plan B Cocktail Bar</strong>, your ultimate destination for handcrafted cocktails, a cozy ambiance, and unforgettable nights. Situated in the heart of the city, we serve a unique cocktail experience that caters to all tastes and preferences.
          </p>
          <p>
            At Plan B, we take mixology to the next level. Our bartenders use the finest spirits and freshest ingredients to create signature cocktails, alongside your favorite classics. Every cocktail is a piece of art, crafted with passion and expertise.
          </p>
          <p>
            Plan B provides the perfect setting. We offer a warm and inviting atmosphere with an exceptional cocktail selection that will keep you coming back for more.
          </p>
        </Col>

        {/* Sağ tarafta görseller */}
        <Col md={6}>
          <Row>
            <Col xs={6} md={6}>
              <Image
                src={cocktail1}
                alt="Cocktail 1"
                fluid
                className="mb-3"
              />
            </Col>
            <Col xs={6} md={6}>
              <Image style={{weight:'306px', height:'204px'}}
                src={cocktail2}
                alt="Cocktail 2"
                fluid
                className="mb-3"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Image
                src={cocktail3}
                alt="Cocktail 3"
                fluid
                className="mb-3"
              />
            </Col>
            <Col xs={6} md={6}>
              <Image
                src={cocktail4}
                alt="Cocktail 4"
                fluid
                className="mb-3"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <Image
                src={cocktail5}
                alt="Cocktail 5"
                fluid
                className="mb-3"
              />
            </Col>
            <Col xs={6} md={6}>
              <Image
                src={cocktail6}
                alt="Cocktail 6"
                fluid
                className="mb-3"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      
    </Container>
    </>
  );
}

export default About;