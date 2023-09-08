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
        <BlackBanner message={<>Unlock <strong>VIP Access</strong>  to Exclusive Deals Before Anyone Else! <i class='fa-regular fa-gem'></i></>} />
        <NavBar />
        <Landing />
        <BeigeBanner/>
        <BlackBanner message={<>Don't Just Follow Trends – <strong>Set Them</strong> with Exclusive Member Deals!</>} />
        <FormComponent />          
    </div>
    );
        }
    
        export default App;
