import React from "react"
import styles from "./Input.module.scss"

interface IInput {
  id: string
  label?: string
  placeholder?: string
  onChange: React.ChangeEventHandler
  value: string
}

const index = ({
  id,
  label,
  placeholder,
  onChange,
  value,
  ...props
}: IInput & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={styles.input}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        type={"text"}
        value={value}
        {...props}
      />
    </div>
  )
}

export default index
