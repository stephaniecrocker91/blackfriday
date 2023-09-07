import Carousel from 'react-bootstrap/Carousel';
import Hero from '../images/hero.png';
import Hero2 from '../images/color.jpg';
import styles from '../styles/Landing.module.css';

var heroData = [
    {id: 1,
    image: Hero,
    alt: "Hero 1"
    },
    {id: 2,
    image: Hero2,
    alt: "Hero 2"}
]

function CarouselComponent() {
    return (
        <section id ={styles.home}className={
            styles.HeroBlock
        }>
            <Carousel>
                {
                heroData.map (hero=>{
                    return(
                        <Carousel.Item interval={3000} key={hero.id}>
                            {/* Add the overlay div under here */}
                            <div className={
                                styles.overlay
                                }>    
                            </div>
                            <img className="d-block w-100"
                            src={hero.image}
                            alt={"Slide"+ hero.id}/>
                        </Carousel.Item>
                    )
                })
            }
                
            </Carousel>
        </section>
    );
}

export default CarouselComponent;
