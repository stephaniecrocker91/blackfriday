import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import LandingFade from './components/LandingFade';
import Hero from './components/Hero';



function App() {
    return (
    <div className={styles.App}>
        <Banner />
        <NavBar />
        <Landing />
        <FormComponent />
        <LandingFade />
        <Hero />

    </div>
    );
        }
    
        export default App;
