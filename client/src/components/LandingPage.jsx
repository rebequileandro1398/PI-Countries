
import { Link } from "react-router-dom";
import styles from './StylesComponents/LandingPage.module.css'

export default function LandingPage() {
    
    return <div className={styles.landing}>
        
            <h1>PI-Countries</h1>
            <Link to= '/home'> 
                <button className={styles.button}>Ingresar</button>
            </Link>

    </div>
}