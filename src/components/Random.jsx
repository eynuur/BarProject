/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useCart } from '../CartContext';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Negative from './Negative';
import Positive from './Positive';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #D4E6F1;
  color: white;
  padding: 50px;
  overflow-y: auto;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const MenuCard = styled.div`
  width: 260px;
  height: 380px;
  background-color: rgb(175, 208, 242);
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(67, 134, 229, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 40px rgba(135, 130, 130, 0.5);
  }
`;

const MenuCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const MenuCardText = styled.div`
  padding: 10px;
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const LoadingMessage = styled.div`
  color: yellow;
  font-size: 1.5rem;
  text-align: center;
`;

const Random = () => {
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useCart(); // Sepete ürün eklemek için CartContext'ten gelen fonksiyonu alıyoruz.

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/random.php'
        );
        setCocktail(response.data.drinks[0]); // Random kokteyl verisini alıyoruz.
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCocktail();
  }, []);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <Container>
      <Negative />
      <Positive />
      <Title>Cocktail of the Day</Title>
      <MenuCard>
        <MenuCardImage src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <MenuCardText>{cocktail.strDrink}</MenuCardText>
        <ButtonContainer>
          <IconButton color="primary" onClick={() => handleAddToCart(cocktail)}>
            <AddShoppingCartIcon /> Add to Cart
          </IconButton>
        </ButtonContainer>
      </MenuCard>
    </Container>
  );
};

export default Random;
