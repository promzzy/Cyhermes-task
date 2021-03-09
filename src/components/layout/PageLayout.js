import React from 'react'
import SideNave from '../shared/SideNave'
import styles from './styles/PageLayout.module.css'
export default function PageLayout(props){
    return(
        <div className={styles.layout}>
            <SideNave />
            <div className={styles.pageContent}>
                {props.children}
            </div>

        </div>
    )
}