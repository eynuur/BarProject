/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useCart } from '../CartContext';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Negative from './Negative';
import Positive from './Positive';
import CasinoIcon from '@mui/icons-material/Casino';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1200px;
`;

const MenuCard = styled.div`
  width: 260px;
  height: 380px;
  background-color:rgb(175, 208, 242);
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

const Mocktail = () => { // Burada ismi "Mocktail" olarak değiştirdik
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Sayfa başına ürün sayısı azaltıldı
  const { handleAddToCart } = useCart();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get(
          'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic' // Mocktail API'si
        );
        setCocktails(response.data.drinks);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCocktails();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cocktails.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(cocktails.length / itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  return (
    <Container>
      <Negative />
      <Positive />
      
      <hr />
      <Title style={{ color: "black", fontFamily: 'Playfair Display' }}>Mocktail Menu</Title> {/* Başlık değiştirildi */}
      <hr />
      <MenuContainer>
        {currentItems.map((cocktail) => (
          <MenuCard key={cocktail.idDrink}>
            <MenuCardImage src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <MenuCardText>{cocktail.strDrink}</MenuCardText>
            <ButtonContainer>
              <IconButton color="primary" onClick={() => handleAddToCart(cocktail)} >
                <AddShoppingCartIcon /> Add to Cart
              </IconButton>
            </ButtonContainer>
          </MenuCard>
        ))}
      </MenuContainer>

      <Stack spacing={2} style={{ marginTop: '30px' }}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
        />
      </Stack>
    </Container>
  );
};

export default Mocktail; // Burada da dışa aktarırken "Mocktail" ismiyle dışa aktardık
