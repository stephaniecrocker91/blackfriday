import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/herocard.png';
import Hero2 from '../images/herocard2.png';
import styles from '../styles/Landing.module.css';

var heroData = [
    {
        id: 1,
        image: Hero

    }, {
        id: 2,
        image: Hero2
    }
]

function CarouselComponent() {
    return (
        <section id={
                styles.home
            }
            className={
                styles.HeroBlock
        }>
            <div className={
                styles.carouselContainer
            }>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        {/* Overlay on each item*/}
                        <div className={
                            styles.overlay
                        }></div>
                        <img className="d-block w-100"
                            src={Hero}
                            alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        {/* Overlay on each item*/}
                        <div className={
                            styles.overlay
                        }></div>
                        <img className="d-block w-100"
                            src={Hero2}
                            alt="Second slide"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}

export default CarouselComponent;

{ /* Pverlay works but has a third faulty slide
function CarouselComponent() {
    return (
        <section id ={styles.home}className={
            styles.HeroBlock
        }>
            <Carousel>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={Hero} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={Hero2} alt="Second slide" />
            </Carousel.Item>
                <div className={
                styles.overlay
            }></div>
            </Carousel>

         </section>
    );
}

export default CarouselComponent;
*/
}
