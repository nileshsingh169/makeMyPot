import React from 'react'
import brain from "./imagesDashboard/Brain.png"
import styles from "./dashboard.module.css"

const ThoughtBox = () => {
  return (
    <div className={styles.thoughtBox}>
        <div className={styles.thought}>
            <div>
              <img src={brain} alt="" />
            </div>
            <div  className={styles.thoughtText}>
                <p>Success is not about accumulating wealth for its own sake, 
                 but about achieving goals that matter. Avoid <br/> the trap of greed; instead, 
                 let your financial pursuits align with your values and aspirations.
                  True wealth <br/> is found in balance, contentment, and the ability to make a positive impact as you reach your objectives.</p>
            </div>
        </div>
</div>
  )
}

export default ThoughtBox