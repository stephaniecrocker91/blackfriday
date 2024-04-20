import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/herocard.png';
import Hero2 from '../images/herocard2.png';
import Hero2mobile from '../images/hero2mobile.png';
import Heromobile from '../images/heromobile.png';
import styles from '../styles/CarouselComponent.module.css';

var heroData = [
    {
        id: 1,
        image: Hero
    },
    {
        id: 2,
        image: Hero2
    }
]

function CarouselComponent() {
    return (
        <>
            {/* DESKTOP DISPLAY */}
            <section
                id={styles.home}
                className={`${styles.HeroBlock} ${styles.DesktopDisplay}`}
            >
                <div className={styles.carouselContainer}>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={Hero} alt="First slide" loading="eager" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={Hero2} alt="Second slide" loading="eager" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            {/* MOBILE DISPLAY */}
            <section
                id={styles.home}
                className={`${styles.HeroBlock} ${styles.MobileDisplay}`}
            >
                <div className={styles.carouselContainer}>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={Heromobile} alt="First slide" loading="eager" />
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            {/* Overlay on each item */}
                            <div className={styles.overlay}></div>
                            <img className="d-block w-100" src={Hero2mobile} alt="Second slide" loading="eager" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    );
}

export default CarouselComponent;
