import styles from "./page.module.css";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <div className={styles.products}>
        <div className={styles.productDetails}>
          <img src="https://picsum.photos/id/30/600/300" alt="Logo" />
          <h2>Product 1</h2>
          <h3>$???</h3>
          <Link
            href="./products/productDetails"
            className={styles.pruductButton}
          >
            Show Details
          </Link>
          {/* <button className={styles.pruductButton}>Show Details</button>  */}
        </div>
      </div>
      {/*  */}
      <div className={styles.products}>
        <div className={styles.productDetails}>
          <img src="https://picsum.photos/id/30/600/300" alt="Logo" />
          <h2>Product 1</h2>
          <h3>$???</h3>
          <Link
            href="./products/productDetails"
            className={styles.pruductButton}
          >
            Show Details
          </Link>
        </div>
      </div>
    </>
  );
}
