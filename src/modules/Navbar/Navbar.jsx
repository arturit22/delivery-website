import styles from "./Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftContent}>
                <a href="">Калькулятор</a>
                <a href="">О нас</a>
                <a href="">Гарантия</a>
                <a href="">Отзывы</a>
            </div>

            <div className={styles.rightContent}>
                <button className={styles.button}>Оставить заявку</button>
            </div>
        </nav>
    )
}