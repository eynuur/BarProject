import { useCart } from '../CartContext'; // CartContext'ten gelen fonksiyonları alıyoruz
import { Button, Box, Typography, Paper, IconButton, Stack, Alert } from '@mui/material';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import Negative from './Negative';
import Positive from './Positive';

const Shopping = () => {
  const { cart, updateCartItem, removeFromCart, clearCart } = useCart(); // clearCart fonksiyonunu da alıyoruz
  const [showAlert, setShowAlert] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.strDrinkPrice || 0) * item.quantity, 0).toFixed(2);
  };

  const handleOrder = () => {
    clearCart(); // Sepeti temizle
    setShowAlert(true); // Sipariş verildiğinde alert göster
    setTimeout(() => {
      setShowAlert(false); // 3 saniye sonra alert'i gizle
    }, 3000);
  };

  return (
    <Box>
      <br />
      <br />
      <br />
      <br />
      <Negative/>
      <Positive/>
      <Typography variant="h3" gutterBottom align="center">
      Your Cart
      </Typography>

      {/* Alert mesajını gösteriyoruz */}
      {showAlert && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="success">Your Order has been Received!</Alert>
        </Stack>
      )}

      <Box>
        {cart.length === 0 ? (
          <Typography variant="h5" align="center">
            Your cart is empty. Please add some products.
          </Typography>
        ) : (
          cart.map((item) => (
            <Paper key={item.idDrink} sx={{ display: 'flex', justifyContent: 'space-between', padding: 2, marginBottom: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.strDrinkThumb} alt={item.strDrink} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8, marginRight: 20 }} />
                <Box>
                  <Typography variant="h6">{item.strDrink}</Typography>
                  <Typography variant="body2">₺{item.strDrinkPrice?.toFixed(2) || 0}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button variant="outlined" size="small" onClick={() => updateCartItem(item.idDrink, 'decrement')} disabled={item.quantity <= 1} sx={{ marginRight: 1 }}>
                  -
                </Button>
                <Typography variant="body1">{item.quantity}</Typography>
                <Button variant="outlined" size="small" onClick={() => updateCartItem(item.idDrink, 'increment')} sx={{ marginLeft: 1 }}>
                  +
                </Button>
                <IconButton color="error" onClick={() => removeFromCart(item.idDrink)} sx={{ marginLeft: 2 }}>
                  <FaTrashAlt />
                </IconButton>
              </Box>
            </Paper>
          ))
        )}
        {cart.length > 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
            <Typography variant="h5">Toplam:</Typography>
            <Typography variant="h5">₺{calculateTotal()}</Typography>
            <Button variant="contained" color="primary" onClick={handleOrder}>
             Place Order
            </Button>
          </Box>
        )}
        <br />
        <br />
      </Box>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};


export default Shopping;
