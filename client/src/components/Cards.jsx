import { Link } from "react-router-dom";
import styles from  './StylesComponents/Cards.module.css'


export default function Cards({img, name, continent, id}) {
    return <div className={styles.cards}>
        <Link to= {`/home/${id}`}>
        <img src={img} alt='image not found' style={{ width: "5em" }}/>
        </Link>
        <h3>{name}</h3>
        <h3>{continent}</h3>
    </div>
}