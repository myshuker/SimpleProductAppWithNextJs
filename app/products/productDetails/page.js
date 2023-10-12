import styles from "../page.module.css";
export default function ProductDetails() {
  return (
    <div className={styles.products}>
      <div className={styles.productDetails}>
        <img src="https://picsum.photos/id/30/600/300" alt="Logo" />
        <h2>Product 1</h2>
        <h3>$???</h3>
        <p> This is Product 1</p>
      </div>
      {/*  */}
    </div>
  );
}
