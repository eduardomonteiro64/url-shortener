import React, { ReactNode } from "react"
import styles from "./Button.module.scss"

interface IButton {
  children: ReactNode
}

const index = ({ children }: IButton) => {
  return <button className={styles.btn}>{children}</button>
}

export default index
