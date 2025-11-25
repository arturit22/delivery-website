import styles from './App.module.css'
import Header from './modules/Header/Header'
import Navbar from './modules/Navbar/Navbar'
import Article from './modules/Article/Article'

function App() {

  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <main className={styles.content}>
        <Article />
      </main>
    </div>

      
  )
}

export default App
