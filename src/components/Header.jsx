import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate eklendi
import { useState } from 'react';
import { useCart } from '../CartContext';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menüsü ikonu
import Drawer from '@mui/material/Drawer'; // Drawer bileşeni eklendi
import '../css/Header.scss';

function Header() {
  const { cart } = useCart(); // CartContext'ten sepet bilgisini alıyoruz
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false); // Hamburger menüsünün açık olup olmadığını kontrol eder
  const navigate = useNavigate(); // useNavigate tanımlandı

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.toLowerCase() === 'reservation') {
      navigate('/reservation');
    } else if (searchTerm.toLowerCase() === 'menu') {
      navigate('/menu');
    } else if (searchTerm.toLowerCase() === 'home') {
      navigate('/home');
    } else if (searchTerm.toLowerCase() === 'about') {
      navigate('/about');
    } else if (searchTerm.toLowerCase() === 'contact') {
      navigate('/contact');
    } else if (['whiskey', 'gin', 'vodka', 'wine', 'rum', 'tequila'].includes(searchTerm.toLowerCase())) {
      navigate('/menu');
    } else {
      alert('Invalid search term');
    }
  };

  const toggleDrawer = () => setOpen(!open); // Hamburger menüsünü açıp kapatır

  return (
    <nav className="navbar navbar-expand-md position-fixed w-100 top-0 start-0" style={{ marginBottom: '45px', zIndex: 1000, backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FormatBoldIcon style={{ marginLeft: '10px', marginRight: '-5px', fontSize: '35px' }} />
        </Link>
        
        {/* Hamburger Menü İkonu */}
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>

        {/* Sağdan Kayarak Açılan Drawer */}
        <Drawer
          anchor="right" // Menü sağdan açılsın
          open={open} // Menü açık mı?
          onClose={toggleDrawer} // Menü kapatıldığında
        >
          <div style={{ width: 250, padding: '20px' }}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/reservation">Reservation</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shopping">Cart</Link></li>
            </ul>
          </div>
        </Drawer>

        {/* Desktop Menü */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reservation">Reservation</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
          </ul>
          <form className="d-flex align-items-center" role="search" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
          <Link className="text-decoration-none ms-2" to="/shopping">
            <IconButton aria-label="cart" style={{ marginRight: '5px' }}>
              <StyledBadge badgeContent={cart.length > 0 ? cart.length : null} color="secondary" style={{ display: cart.length > 0 ? 'inline-block' : 'none' }}>
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
