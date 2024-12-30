import { Box, Grid, Typography, IconButton } from '@mui/material';
import { FaInstagram, FaTwitter, FaTiktok, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';
import '../css/Contact.scss';
import Negative from './Negative';
import Positive from './Positive';

// Styled Components
const Title = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
`;

const SocialMediaSection = styled(Box)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
`;

const SocialIcon = styled(IconButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.color || '#333'};  /* Dinamik renk */
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.2);
    color: ${(props) => props.hoverColor || '#333'};  /* Hover renk değişimi */
  }

  svg {
    font-size: 3rem;
    margin-bottom: 8px;
  }

  div {
    font-size: 1.1rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

function Contact() {
  
  return (
    
    <Box sx={{ marginTop: '50px', marginBottom: '100px' }}>
      <Negative/>
      <Positive/>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={8} md={6} textAlign="center">
          <Title>Contact Us</Title>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>
            Follow us on social media or reach out via email for more information.
          </Typography>

          <SocialMediaSection>
            <SocialIcon href="mailto:eynuurm@gmail.com" color="#D44638" hoverColor="#FF6347">
              <FaEnvelope />
              <div>Email Us</div>
            </SocialIcon>

            <SocialIcon href="https://www.instagram.com/eynuuur" target="_blank" rel="noopener noreferrer" color="#E1306C" hoverColor="#EA0CDE">
              <FaInstagram />
              <div>Instagram</div>
            </SocialIcon>

            <SocialIcon href="https://x.com/eynuurr" target="_blank" rel="noopener noreferrer" color="#1DA1F2" hoverColor="#58C7FF">
              <FaTwitter />
              <div>Twitter</div>
            </SocialIcon>

            <SocialIcon href="https://www.tiktok.com/@eynuuur" target="_blank" rel="noopener noreferrer" color="#010002" hoverColor="#000000">
              <FaTiktok />
              <div>TikTok</div>
            </SocialIcon>

            <SocialIcon href="https://www.facebook.com/eynur.m" target="_blank" rel="noopener noreferrer" color="#3b5998" hoverColor="#0866FF">
              <FaFacebook />
              <div>Facebook</div>
            </SocialIcon>

            <SocialIcon href="https://github.com/eynuur" target="_blank" rel="noopener noreferrer" color="#000000" hoverColor="#9248A7">
              <FaGithub />
              <div>GitHub</div>
            </SocialIcon>
          </SocialMediaSection>
        </Grid>
      </Grid>
    </Box>
    
  );
}

export default Contact;
