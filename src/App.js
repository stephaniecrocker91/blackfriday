import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
    return (<div className={styles.App}>
        <Landing />
        <CountdownTimer countdownTimestampMs={1700784000000}/>
        <FormComponent />
    </div>
    );
        }
    
        export default App;
