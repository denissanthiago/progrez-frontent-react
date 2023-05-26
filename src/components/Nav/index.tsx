import useGetData from '../../hooks/useGetData'
import styles from './styles.module.css'
const Nav = (): JSX.Element => {
    const { data = [] } = useGetData()
    console.log(data);
    
    return (
        <nav className={styles.content_nav}>
           
        </nav>
    )
}

export default Nav