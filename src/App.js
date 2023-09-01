import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';
import Banner from './components/Banner';
import NavBar from './components/NavBar';


function App() {
    return (
    <div className={styles.App}>
        <Banner />
        <NavBar />
        <Landing />
        <FormComponent />
    </div>
    );
        }
    
        export default App;
