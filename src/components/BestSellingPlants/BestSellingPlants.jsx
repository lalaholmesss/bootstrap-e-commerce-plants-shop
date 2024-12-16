import styles from "./BestSellingPlants.module.css"

export default function BestSellingPlants() {
    return(
        <div className={`${styles.mainContainer} container`}>
            <div className={` row`}>
                <div className={`${styles.columnOne} col-2`}>
                    <h2>Best Selling Plants</h2>
                    <p>Easiest way to healthy life by buying your favorite plants </p>
                    <button>See more </button>
                </div>
                <div className={`${styles.plantsInfo} col-2`}>
                    <img src="src\assets\images\best-selling-plants-plant1.png" alt="plant-img1"/>
                    <h5>Natural Plants</h5>
                    <p>₱ 1,400.00</p>
                </div>
                <div className={`${styles.plantsInfo} col-2`}>
                    <img src="src\assets\images\best-selling-plants-plant2.png" alt="plant-img2"/>
                    <h5>Artificial Plants</h5>
                    <p>₱ 900.00</p>
                </div>
                <div className={`${styles.plantsInfo} col-2`}>
                    <img src="src\assets\images\best-selling-plants-plant3.png" alt="plant-img3"/>
                    <h5>Artificial Plants</h5>
                    <p>₱ 3,500.00</p>
                </div>
            </div>
        </div>
    )
}