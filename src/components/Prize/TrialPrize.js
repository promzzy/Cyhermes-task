import React, { useState, useEffect} from 'react'
import styles from './styles/TrialPrize.module.css'
// import {Progress} from 'antd'
import {Modules} from '../../data/modules'

export default function TrialPrize(){

    const [modules, setModules] =  useState([])

    useEffect(()=>{
        setModules(Modules)
    },[])


    return(
        <div className={styles.dashboard}>
            <div className={styles.dashboardTop}>
                <div>
                    <span className={styles.profileName}>
                        Hey, Terry
                    </span>
                    <div className={styles.startTrial}>
                        <span>Start your</span>
                        <span className={styles.trialPeriod}> 30 days</span>
                        <span>Trial</span>
                    </div>
                    <p className={styles.selectPackage}>
                        Select your preferred package below
                    </p>


                    
                </div>
                <div className={styles.prizeTotal}>
                    <span className={styles.currency}>NGN</span>
                    <span className={styles.price}>1,999,999</span>
                    <div>
                        <span className={styles.total}>Total </span>
                        <span className={styles.exclude}>(EXCLUDES VAT) </span>
                        </div>
                </div>
            </div>

            <div className={styles.packageDetails}>
                <div className={styles.priceDetails}>
                    <div className={styles.mainPrice}>
                        <span className={styles.startsFrom}>Starts From</span>
                        <span className={styles.mainPriceLight}>NGN</span>
                        <span className={styles.mainPriceBold}>5,999,999.99</span>
                        <span className={styles.mainPriceLight}>Per annum</span>
                    </div>
                    <p>
                        <span className={styles.mainPriceBold}>Premium</span>
                    </p>
                    <div>
                    <span className={styles.mainPriceLight}>100 users</span>
                    <span className={styles.mainPriceLight}>All modules</span>
                    </div>
                </div>

                <div className={styles.basicDetails}>
                    <h3>
                        Basic
                    </h3>
                    <div>
                        <span className={styles.basicTrialDays}> 30 days trial </span>
                        <span className={styles.premiumFeature}>
                            on our premium app features
                        </span>
                        <p>
                            <span>
                                includes
                            </span>
                            <ul>
                                <li>
                                   - 25 users
                                </li>
                                <li>
                                   - all modules & features
                                </li>
                                <li>
                                   - unlimited commitees
                                </li>
                                <li>
                                   - unlimited roles creation
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.progresSection}>
                <h4>Add more users</h4>
                <span>NGN99,999 per user</span>
<p>
{/* <Progress percent={30} /> */}
</p>
            </div>


            <div className={styles.gridBody}>

                {
                    modules.map((module)=>(
                        <div>
                            <span>
                                {module.icon}
                            </span>
                            <span>
                                {module.moduleName}
                            </span>
                        </div>
                    ))
                }   

            </div>
            
        </div>
    )
}