import styles from './App.module.css';
import FormComponent from './components/FormComponent'
import Landing from './components/Landing';


function App() {
    return (<div className={styles.App}>
        <Landing />
        <FormComponent />
    </div>
    );
        }
    
        export default App;
