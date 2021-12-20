
import { Link } from "react-router-dom";
import styles from './Styles/LandingPage.module.css'
import image from '../img/landing.png'
export default function LandingPage() {
    
    return <div className={styles.contLanding}>
            <div className={styles.landing}>
                <h1>PI-COUNTRIES</h1>
                <Link to= '/home'> 
                    <button className={styles.button}>GET STARTED</button>
                </Link>
            </div>

            <div className={styles.image}>
                 <img className={styles.image} src={image} alt="image not found" srcset=""/>
            </div>
    </div>
}