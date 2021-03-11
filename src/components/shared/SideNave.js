import React from 'react'
import styles from './styles/SideNav.module.css'
import { BrowserRouter as Router, Link} from 'react-router-dom'
export default function SideNave(){
    return(
        <div className={styles.sideNav}>
            <div className={styles.logo}>
                logo
            </div>
            <div className={styles.navMenu}>
                <ul className={styles.menuList}>

                    <Router>

                    <Link className={styles.link} to="/">
                    <li className={`${styles.menuItem} ${styles.menuActive}`}>
                        trial & pricing
                    </li>
                    </Link >

                    <Link className={styles.link} to="/">
                    <li className={styles.menuItem}>
                      payment method  
                        </li>
                        </Link>

                        <Link className={styles.link} to="/">
                        <li className={styles.menuItem}>
                        get started
                        </li>
                        </Link>

                        </Router>
                </ul>
            </div>
            <div className={styles.navText}>
                Success is not final, failure <br /> is not fatal it is courage to <br />  continuee that courts
            </div>
        </div>
    )
}