import imgSrc from '../img/posidrone.jpg'; 
import pearImg from '../img/pear.jpg'; 
import sunsetImg from '../img/sunset.jpg';
import '../css/Etkinlik.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function Etkinlik() {
  return (
    <section className="container mb-0" style={{ marginTop: '50px' }}>
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center" style={{marginTop:'10px', marginBottom:'10px'}} >
        {/* İlk Kart - Link Eklenmiş */}
        <a
          href="https://youtu.be/fIWRqMLhWbI?si=_gywhDG27aPBd-y1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={imgSrc}
              title="Chris Luno"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chris Luno
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Our special guest this week is none other than the famous DJ Chris Luno! Don’t miss out on this unforgettable musical journey—join us!
              </Typography>
            </CardContent>
          </Card>
        </a>

        {/* İkinci Kart */}
        <a
          href="https://www.youtube.com/watch?v=3kdQ5Y23sYo&ab_channel=QueenBeeMixology"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={pearImg}
              title="Pear Martini"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                YOUR FAVORITE
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Today, we’ll guide you through the process of making your favorite cocktail, the Pears Martini. To deepen your knowledge.
              </Typography>
            </CardContent>
          </Card>
        </a>

        {/* Üçüncü Kart */}
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={sunsetImg}
            title="Sunset Vibes"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sunset Vibes
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Between 5 PM and 7 PM, enjoy a 45% discount on all local beers as you take in the stunning sunset.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Etkinlik;
