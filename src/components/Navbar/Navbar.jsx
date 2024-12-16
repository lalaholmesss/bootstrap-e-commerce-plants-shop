import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav className={`${styles.navbar} container`}>
                <a href="/" className={styles.logoNavbar}>Greenmind</a>
                <ul>
                    <li><a href="/Home" className={styles.navNavbar}>Home</a></li>
                    <li><a href="/Products" className={styles.navNavbar}>Products</a></li>
                    <li><a href="/Contacts" className={styles.navNavbar}>Contacts</a></li>
                </ul>
                <div className={styles.actionsNavbar}>
                    <a href="/cart"><img src="src/assets/images/Cart.png" alt="cart-img" /></a>
                    <a href="/account"><img src="src/assets/images/Person.png" alt="account-img" /></a>
                    <a href="/slide"><img src="src/assets/images/FilterRight.png" alt="slide" /></a>
                </div>
            </nav>
        </>
    );
}
