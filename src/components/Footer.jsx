import { Box, Container, Grid, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#bbdefb', color: 'white', py: 4,  }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> 1234 Some Street, Some City, Some Country
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> example@email.com
            </Typography>
            <Typography variant="body1">
              <strong>Phone:</strong> (123) 456-7890
            </Typography>
          </Grid>

          {/* Map Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Our Location
            </Typography>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.0018573569126!2d-77.03768448464645!3d38.89767697957071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bfc31c65f7%3A0x9b25c2b5c79f8f7e!2sThe%20White%20House!5e0!3m2!1sen!2sus!4v1690668012345!5m2!1sen!2sus"
              width="100%"
              height="200"
              sx={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="White House Location"
            />
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid white', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            &copy; 2024 Plan B. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
