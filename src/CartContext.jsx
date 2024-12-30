/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

// Sepet context'ini oluşturuyoruz
const CartContext = createContext();

// Sepet provider'ı, sepete erişim sağlayacak olan component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // localStorage'dan veri yükleme (ilk render'da)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Sepete ürün eklerken, localStorage'a kaydediyoruz
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Sepete ürün ekleme fonksiyonu
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.idDrink === item.idDrink);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.idDrink === item.idDrink
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Sepet öğesinin miktarını güncelleme fonksiyonu
  const updateCartItem = (id, action) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.idDrink === id
          ? {
              ...item,
              quantity: action === 'increment' ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      );
      return updatedCart;
    });
  };

  // Sepetten ürün çıkarma fonksiyonu
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.idDrink !== id));
  };

  // Sepeti temizleme fonksiyonu
  const clearCart = () => {
    setCart([]); // Sepeti sıfırla
    localStorage.removeItem('cart'); // localStorage'deki veriyi temizle
  };

  // Context değerlerini sağlayan kısım
  return (
    <CartContext.Provider
      value={{ cart, handleAddToCart, updateCartItem, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Sepet context'ine erişim sağlayan hook
export const useCart = () => {
  return useContext(CartContext);
};

// PropTypes ile children doğrulama
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
