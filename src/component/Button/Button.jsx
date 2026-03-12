// import React from 'react'
import styles from "./Button.module.css";


const Button = (props) => {
  const { type, disabled, onClick, children } = props;
  // const handleClick = () => {
  //   alert("click")
  // }

  return (
    <div>
      <button className={styles.button} type={type} disabled={disabled} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button