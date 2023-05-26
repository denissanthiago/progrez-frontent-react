import React from "react"

import styles from './styles.module.css'
import Header from "../Header"
import Nav from "../Nav"
import Footer from "../Footer"

interface ILayout {
    children: React.ReactNode | React.ReactNode[]
}

const Layout = ({ children }: ILayout): JSX.Element => {
  return (
    <section className={styles.content_layout}>
        <Header />
        <Nav />
        {children}
        <Footer/>
    </section>
  )
}

export default Layout