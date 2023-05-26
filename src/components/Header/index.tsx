import styles from './styles.module.css'
import tuprutec from '../../assets/Tu PruTec.svg'

const Header = (): JSX.Element => {
  return (
    <div className={styles.content_header}>
      <div>
        <img 
        src={tuprutec}
        alt="logotuPrutec"
        />
      </div>
    </div>
  )
}

export default Header