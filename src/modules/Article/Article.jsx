import styles from './Article.module.css';


export default function Article() {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Без проблемная доставка купленных вещей из США, Европы и Азии <br /> в Россию</h1>
            </div>
            <div className={styles.content}>
                <p>Сэкономьте на покупках и наслаждайтесь мировыми брендами - наш сервис позволяет вам легко и удобно заказывать товары со всего мира и получать их в России</p>
            </div>
            <div className={styles.image}>
                <img src="/contentImage.jpg" alt="" />
            </div>
        </div>
    )
}