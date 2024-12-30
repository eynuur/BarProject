import 'bootstrap/dist/css/bootstrap.min.css';

import CarouselComponent from './carousel';
import Etkinlik from './etkinlik';
import Abo from './Abo';




function Home() {
  return (
    <>
    <CarouselComponent/>
    <Etkinlik/>
    <Abo/>
    </>
  )
}

export default Home;