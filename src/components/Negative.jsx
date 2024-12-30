import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Negative() {
  const navigate = useNavigate();

  return (
    <button
      className="negative-btn"
      onClick={() => navigate(-1)}
      style={{
        background: 'transparent',   // Butonun arka planını şeffaf yapıyoruz
        border: 'none',              // Kenarlıkları kaldırıyoruz
        padding: 0,                  // İç boşlukları sıfırlıyoruz
        cursor: 'pointer',          // İkon üzerine gelince pointer işareti
      }}
    >
      <ArrowBackIosNewIcon
        className="icon"
        style={{
          position: 'fixed',
          top: '70px',
          left: '20px',
          zIndex: 9999,
          fontSize: '2rem', // İkon boyutunu buradan kontrol edebilirsiniz
        }}
      />
    </button>
  );

  
}

export default Negative;
