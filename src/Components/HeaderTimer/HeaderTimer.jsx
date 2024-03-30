import React, {useEffect, useState} from 'react' 
import styles from "./Headertimer.module.scss";
const Timer = () => {
    const [days,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [minutes,setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)

    const deadline = "July, 4, 2025 "

    const getTime =()=>{
        const time = Date.parse(deadline)-Date.now()
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMinutes(Math.floor((time/1000/60)%60))
        setSeconds(Math.floor((time/1000)%60))
    }
    useEffect(()=>{
        const interval = setInterval(() => getTime(deadline),1000)
            return ()=> clearInterval(interval)
    }, [])
    return(
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.box}>
                        <h1 className={styles.number}>{days<10? "0"+days: days} </h1>
                        <span className={styles.text}>Days</span>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.number}>{hours<10? "0"+hours: hours} </h1>
                        <span className={styles.text}>Hours</span>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.number}>{minutes<10? "0"+minutes: minutes} </h1>
                        <span className={styles.text}>Minutes</span>
                    </div>
                    <div className={styles.box}>
                        <h1 className={styles.number}>{seconds<10? "0"+seconds: seconds} </h1>
                        <span className={styles.text}>Seconds</span>
                    </div>
                </div>
            </div>
        </>
    )
    }

export default Timer;