import styles from "./Footer.module.css";

export default function Footer() {
    return(
        <footer className={`${styles.footer} container-fluid`}> 
            <div className="container">
            <div className={`${styles.footerContent} container row`}>
                <div className={`${styles.socialLinks} col-2`}>
                    <h3>GREENMIND</h3>
                    <p>We help you find your dream plant</p>
        
                        <a href="/facebook-profile">
                            <img src="src/assets/images/facebook-icon.png" alt="facebook-icon" />
                        </a>
                        <a href="/instagram-profile">
                            <img src="src/assets/images/instagram-icon.png" alt="instagram-icon" />
                        </a>
                        <a href="/twitter-profile">
                            <img src="src/assets/images/twitter-icon.png" alt="twitter-icon" />
                        </a>
                </div>
            
             
                <div className={`${styles.information} col-1`}>
                    <ul>
                        <li>Information</li>
                        <li>About</li>
                        <li>Product</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={`${styles.information} col-1`}>
                    <ul>
                        <li>Company</li>
                        <li>Community</li>
                        <li>Career</li>
                        <li>Our story</li>
                    </ul>
                </div>
                <div className={`${styles.information} col-3`}>
                    <ul>
                        <li>Contact</li>
                        <li>Getting Started</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </ul>
                </div>
            
            <p>2023 all Right Reserved Term of use GREENMIND</p>
            </div>
            </div>
        </footer>
    )
}