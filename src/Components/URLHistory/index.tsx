import React from "react"
import styles from "./URLHistory.module.scss"
import ClipboardCopy from "../ClipboardCopy"

const index = ({ shortnedLink }: { shortnedLink: string[] }) => {
  return (
    <ul className={styles.history}>
      {shortnedLink.map((link) => (
        <li key={link}>
          <a href={"https://" + link}>{link}</a>
          <ClipboardCopy link={link} />
        </li>
      ))}
    </ul>
  )
}

export default index
