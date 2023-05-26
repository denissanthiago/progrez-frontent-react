import styles from './styles.module.css'
import tuprutec from '../../assets/Tu PruTec.svg'
import arrowicon from '../../assets/Arrow Down.svg'

const Header = (): JSX.Element => {
  return (
    <div className={styles.content_header}>
      <div className={styles.content_header_div}>
        <img 
        src={tuprutec}
        alt="logotuPrutec"
        />
        <div className={styles.content__header_divS}>
        <h2>Nombre de usuario</h2>
        <button className={styles.content_header_button}>
          <img src={arrowicon} alt="iconsvgarrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header