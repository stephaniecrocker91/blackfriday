import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';
import CountdownTimer from './components/CountdownTimer/CountdownTimer';

function App() {
    return (<div className={styles.App}>
        <Landing />
        <CountdownTimer/>
        <FormComponent />
    </div>
    );
        }
    
        export default App;
