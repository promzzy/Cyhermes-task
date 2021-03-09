import React from 'react'
import styles from './styles/SideNav.module.css'
export default function SideNave(){
    return(
        <div className={styles.sideNav}>
            <div>
                logo
            </div>
            <div className={styles.navMenu}>
                <ul className={styles.menuList}>
                    <li className={`${styles.menuItem} ${styles.menuActive}`}>
                        trial & pricing
                    </li>
                    <li className={styles.menuItem}>
                      payment method  
                        </li>
                        <li className={styles.menuItem}>
                        get started
                        </li>
                </ul>
            </div>
            <div className={styles.navText}>
                Success is not final, failure <br /> is not fatal it is courage to <br />  continuee that courts
            </div>
        </div>
    )
}