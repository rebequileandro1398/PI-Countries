import { Link } from "react-router-dom";
import styles from  './Styles/Cards.module.css'


export default function Cards({img, name, continent, id}) {
    return <div className={styles.cards}>
        <Link to= {`/home/${id}`}>
        <img src={img} alt='not found'/>
        </Link>
        <div>
            <h3>{name}</h3>
            <p>{continent}</p>
        </div>
    </div>
}