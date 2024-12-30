import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Positive() {
    const navigate = useNavigate();
  
    return (
      <button
        className="positive-btn"
        onClick={() => navigate(1)} // 1 ile bir adım ileri gidilir
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
      >
        <ArrowForwardIosIcon
          className="icon"
          style={{
            position: 'fixed',
            top: '70px',
            right: '20px',
            zIndex: 9999,
            fontSize: '2rem',
          }}
        />
      </button>
    );
  }

  export default Positive;