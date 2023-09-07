import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';
import BlackBanner from './components/BlackBanner';
import BeigeBanner from './components/BeigeBanner';
import NavBar from './components/NavBar';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import CarouselComponent from './components/CarouselComponent';


function App() {
    return (
    <div className={styles.App}>
        <BlackBanner />
        <Landing />
        <BeigeBanner/>
        <FormComponent />          
    </div>
    );
        }
    
        export default App;
