import styles from './styles.module.css'
import logofooter from '../../assets/Isotipo.svg'

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.content_footer}>
      <div className={styles.content_footer_div}>
      <img 
      src={logofooter} 
      alt="isotipo" 
      />
      <div className={styles.content_footer_p}>
      <p>© 2023 Progrez All rights reserved</p>
      </div>
      <img 
      src={logofooter} 
      alt="isotipo" 
      />
      </div>
    </footer>
  )
}

export default Footer