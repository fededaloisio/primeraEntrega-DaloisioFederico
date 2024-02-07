import styles from "../../css/ItemListContainer.module.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.container}>
        <p>{greeting}</p>
    </div>
  );
}


export default ItemListContainer;