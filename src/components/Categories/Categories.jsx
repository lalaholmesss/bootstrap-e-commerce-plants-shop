import styles from "./Categories.module.css";

export default function Categories() {
    return(
        <div className={`${styles.mainContainer}`}>
            <h1>Categories</h1>
            <p>Find what you are looking for</p>
            <div className={`${styles.mainContainerBody} container-fluid `}>
                
                    <div className={`${styles.content} `}>
                        <img src="src/assets/images/plant-img1-categories.png" alt="plant-img1" />
                        <h2>Natural Plants</h2>
                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className={`${styles.content} `}>
                        <img src="src/assets/images/plant-img2-categories.png" alt="plant-img2" />
                        <h2>Plant Accessories</h2>
                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button>Explore</button>
                    </div>
                    <div className={`${styles.content} `}>
                        <img src="src/assets/images/plant-img3-categories.png" alt="plant-img3" />
                        <h2>Artificial Plants</h2>
                        <p>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
              
                
            </div>
        </div>
    )
}