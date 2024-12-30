import 'bootstrap/dist/css/bootstrap.min.css';
import cocktail1 from '../img/cocktail1.jpg';
import cocktail3 from '../img/cocktail3.jpg';

function About() {
  return (
    <section className="container mt-10" id="about">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2>Welcome to Plan B</h2>
          <h3>Where passion for mixology meets the art of fine cocktails. We open our doors every day at 2 PM, offering a diverse selection of House cocktails and timeless classics from around the world.</h3>
          <p>
            Our dedication to quality and flavor has earned us glowing reviews from celebrities and cocktail enthusiasts alike, making us a must-visit destination for anyone looking to experience the best in the business. Come join us for an unforgettable drink experience. Cheers!
          </p>
        </div>

        <div className="col-md-6 mb-5">
          <div className="row">
            <div className="col-6">
              <img src={cocktail1} alt="Cocktail 1" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
            </div>
            <div className="col-6">
              <img src={cocktail3} alt="Cocktail 3" className="img-fluid" style={{ maxHeight: '200px', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
