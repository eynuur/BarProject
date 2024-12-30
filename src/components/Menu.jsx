import { useState } from 'react';
import '../css/Menu.scss';
import { Link } from 'react-router-dom';
import Negative from './Negative';
import Positive from './Positive';

function Menu() {
  const [activeCard, setActiveCard] = useState(null);

  return (

   

    
    <div className="container">
         <Positive/>
         <Negative/>
      <div className="cards-container">
        

        {/* Cocktail Card */}
        <Link className="card-link" to="/cocktail" style={{ textDecoration: 'none' }}>
          <div 
            className={`card menucard-1 ${activeCard === 0 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(0)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-content">
              <h2>Cocktail</h2>
              <p>Explore our selection of expertly crafted cocktails, perfect for any occasion.</p>
            </div>
          </div>
        </Link>

        {/* Mocktail Card 1 */}
        <Link className="card-link" to="/mocktail" style={{ textDecoration: 'none' }}>
          <div 
            className={`card menucard-2 ${activeCard === 1 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(1)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-content">
              <h2>Mocktail</h2>
              <p>Enjoy refreshing, alcohol-free mocktails that are just as flavorful.</p>
            </div>
          </div>
        </Link>

        {/* Champange Card 2 */}
        <Link className="card-link" to="/champange" style={{ textDecoration: 'none' }}>
          <div 
            className={`card menucard-3 ${activeCard === 2 ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(2)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-content">
              <h2>Champange Cocktail</h2>
              <p>Refreshing champagne cocktails, perfect for every celebration.</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Menu;
