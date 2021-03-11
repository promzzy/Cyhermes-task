import React, { useState, useEffect} from 'react'
import styles from './styles/TrialPrize.module.css'
import {Modules} from '../../data/modules'
import {ProgressBar} from './ProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAssistiveListeningSystems, faArchway} from '@fortawesome/free-solid-svg-icons'

const Profile = {
    name: "terry",
    email: ""
}


export default function TrialPrize(){

    const [modules, setModules] =  useState([])
    const [personProfile, setPersonProfile] = useState({})

    useEffect(()=>{
        setModules(Modules)
        setPersonProfile(Profile)
    },[])

console.log(personProfile)
    return(
        <div className={styles.dashboard}>
            <div className={styles.dashboardTop}>
                <div>
                    <span className={styles.profileName}>
                        Hey, {personProfile.name}
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
<p className={styles.prgresBar}>
                <ProgressBar />
</p>
            </div>


            <div className={styles.gridBody}>

                {
                    modules.map((module)=>(
                        <div className={styles.moduleItems}>
                            <FontAwesomeIcon className={styles.moduleIcon} icon={faArchway} />
                            <span>
                                {module.moduleName}
                            </span>
                        </div>
                    ))
                }   

            </div>
            <p className={styles.borderLine}>
                
            </p>
            <div className={styles.button}>
                <button className={styles.backBtn}>Go Back</button>
                <button className={styles.continueBtn}>Contiune</button>
            </div>
        </div>
    )
}