import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import imgSrc from '../img/7.jpg';
import cocktail1 from '../img/cocktailbar1.jpg';
import cocktail5 from '../img/oldfashioned.avif';
import '../css/carousel.scss'; 

function CarouselComponent() {
  return (
    <div
      className="custom-carousel"
      style={{
        margin: '10px', // 10px margin ekliyoruz
        display: 'flex', // Flex container yapıyoruz
        justifyContent: 'center', // Yatayda ortalamak için
        alignItems: 'center', // Dikeyde ortalamak için
        height: 'calc(100vh - 60px)', // Yüksekliği ayarlıyoruz, margin'ı da hesaba katıyoruz
        width: '100%', // Tam genişlik
        overflow: 'hidden', // Yandaki çizgiler olmaması için
      }}
    >
      <div
        style={{
          maxWidth: '1000px', // Genişliği sınırlandırıyoruz
          width: '100%', // Genişliği %100 yapıyoruz
          maxHeight: '800px', // Yüksekliği sınırlandırıyoruz
          margin: 'auto'
        }}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={imgSrc}
              alt="First slide"
              style={{
                objectFit: 'cover', // Resmi kapsayacak şekilde düzenliyoruz
                height: '500px', // Sabit yükseklik veriyoruz
              }}
            />
            <Carousel.Caption
              style={{
                position: 'absolute', // Yazıyı konumlandırıyoruz
                bottom: '20px', // Alt kısmı 20px kadar mesafe bırakıyoruz
                left: '50%', // Yatayda ortalamak için
                transform: 'translateX(-50%)', // Tam ortada olması için
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı şeffaf bir arka plan
                color: 'white', // Yazı rengini beyaz yapıyoruz
                padding: '10px', // İçeriğe padding ekliyoruz
              }}
            >
              <h5>Mystical Cocktails, Surprising Flavors</h5>
              <p>Our signature drinks invite you on a new adventure with every visit. Discover flavors that await to surprise and inspire. </p>
              
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img
              className="d-block w-100"
              src={cocktail1}
              alt="First slide"
              style={{
                objectFit: 'cover', // Resmi kapsayacak şekilde düzenliyoruz
                height: '500px', // Sabit yükseklik veriyoruz
              }}
            />
            <Carousel.Caption
              style={{
                position: 'absolute', // Yazıyı konumlandırıyoruz
                bottom: '20px', // Alt kısmı 20px kadar mesafe bırakıyoruz
                left: '50%', // Yatayda ortalamak için
                transform: 'translateX(-50%)', // Tam ortada olması için
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı şeffaf bir arka plan
                color: 'white', // Yazı rengini beyaz yapıyoruz
                padding: '10px', // İçeriğe padding ekliyoruz
              }}
            >
              <h5>Where Art Meets Flavor</h5>
              <p> Each handcrafted cocktail is a masterpiece designed to delight your senses. An unforgettable taste experience awaits in every sip..</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
          <img
              className="d-block w-100"
              src={cocktail5}
              alt="First slide"
              style={{
                objectFit: 'cover', // Resmi kapsayacak şekilde düzenliyoruz
                height: '500px', // Sabit yükseklik veriyoruz
              }}
            />
            <Carousel.Caption
              style={{
                position: 'absolute', // Yazıyı konumlandırıyoruz
                bottom: '20px', // Alt kısmı 20px kadar mesafe bırakıyoruz
                left: '50%', // Yatayda ortalamak için
                transform: 'translateX(-50%)', // Tam ortada olması için
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yarı şeffaf bir arka plan
                color: 'white', // Yazı rengini beyaz yapıyoruz
                padding: '10px', // İçeriğe padding ekliyoruz
              }}
            >
              <h5>Legendary Atmosphere, Unforgettable Memories</h5>
              <p>In the heart of the city, we bring you a unique ambiance and captivating music to make your night extraordinary. Every detail is crafted for you</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;
