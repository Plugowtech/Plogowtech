import { useEffect } from "react";
import styles from "./AnimationLogin.module.css";

export const AnimationLogin =({classNameLogin}) =>{
  return (
      <div className={`${styles.frame} ${classNameLogin}`}>
      <div className={styles.center}>
        <div className={styles.ball}></div>
        <div className={styles.blubb1}></div>
        <div className={styles.blubb2}></div>
        <div className={styles.blubb3}></div>
        <div className={styles.blubb4}></div>
        <div className={styles.blubb5}></div>
        <div className={styles.blubb6}></div>
        <div className={styles.blubb7}></div>
        <div className={styles.blubb8}></div>
        <div className={styles.sparkle1}></div>
        <div className={styles.sparkle2}></div>
        <div className={styles.sparkle3}></div>
        <div className={styles.sparkle4}></div>
        <div className={styles.sparkle5}></div>
        <div className={styles.sparkle6}></div>
        <div className={styles.sparkle7}></div>
        <div className={styles.sparkle8}></div>
        <div className={styles.sparkle9}></div>
        <div className={styles.sparkle10}></div>
      </div>
    </div>
  );
}
