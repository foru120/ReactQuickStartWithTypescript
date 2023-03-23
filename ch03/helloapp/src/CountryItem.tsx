import { CountryType } from "./Data";
import styles from "./styles";

const CountryItem = (props: CountryType) => {
    return (
        <li style={styles.listItemStyle}
            key={props.no}
            className={props.visited ? "list-group-item active" : "list-group-item"}>
        {props.country}
    </li>
    )    
}

export default CountryItem;