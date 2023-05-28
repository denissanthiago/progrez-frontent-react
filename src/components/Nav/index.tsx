import useGetData from '../../hooks/useGetData'
import OptionsMenu from '../OptionsMenu';
import styles from './styles.module.css'

const Nav = (): JSX.Element => {
    const { data } = useGetData()

    return (
        <nav className={styles.content_nav}>
           <OptionsMenu options={data}/>
        </nav>
    )
}

export default Nav