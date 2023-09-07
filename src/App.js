import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import CarouselComponent from './components/CarouselComponent';


function App() {
    return (
    <div className={styles.App}>
        <Banner />
        <Landing />
        <FormComponent />
        <CarouselComponent />
    </div>
    );
        }
    
        export default App;
