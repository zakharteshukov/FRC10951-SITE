import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="container">
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>FRC10951</span>
        </h1>
        
        <p className={styles.description}>
          First Robotics Competition Team 10951
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>About Us</h2>
            <p>Learn about our team, mission, and achievements in competitive robotics.</p>
          </div>

          <div className={styles.card}>
            <h2>Our Robots</h2>
            <p>Explore our robot designs and innovations from past competitions.</p>
          </div>

          <div className={styles.card}>
            <h2>Competitions</h2>
            <p>View our competitive history and upcoming events.</p>
          </div>

          <div className={styles.card}>
            <h2>Join Us</h2>
            <p>Interested in joining Team 10951? Get in touch!</p>
          </div>
        </div>
      </div>
    </main>
  )
}



