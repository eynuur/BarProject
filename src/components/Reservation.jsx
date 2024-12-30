import { useState } from "react";
import { TextField, Button, Container, Grid, Typography, Alert, Box } from "@mui/material";
import Negative from './Negative';
import Positive from './Positive';

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: 1,
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // Reset error

    // Simple validation
    if (!formData.name || !formData.email || !formData.date || formData.guests < 1) {
      setError("Please fill in all fields correctly.");
      return;
    }

    // Email validation (basic)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Date validation (ensure it's not a past date)
    const selectedDate = new Date(formData.date);
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set current date to midnight for comparison
    if (selectedDate < currentDate) {
      setError("You cannot make a reservation for a past date.");
      return;
    }

    // Successful form submission
    setSubmitted(true);
    console.log("Reservation Details:", formData);
    setFormData({ name: "", email: "", date: "", guests: 1 }); // Reset form
  };

  return (
  
    <Container maxWidth="sm" sx={{ mt: 10, mb: 10 }}>
      <Positive/>
      <Negative/>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Make a Reservation
        </Typography>

        {/* Error message */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* Success message */}
        {submitted && <Alert severity="success">Your reservation was successful!</Alert>}
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          {/* Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Date */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Reservation Date"
              variant="outlined"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          {/* Guests */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Number of Guests"
              variant="outlined"
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              inputProps={{ min: 1, max: 20 }}
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Reserve Now
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Reservation;
