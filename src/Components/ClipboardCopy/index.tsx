import React from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ReactComponent as ClipBoardIcon } from "../../assets/clipboard.svg"
import styles from "./ClipboardCopy.module.scss"

const index = ({ link }: { link: string }) => {
  const [wasCopied, setWasCopied] = React.useState<boolean>(false)

  const handleCopy = () => {
    setWasCopied((prev) => !prev)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setWasCopied(false)
    }, 1000)
  }, [wasCopied])

  return (
    <CopyToClipboard text={link} onCopy={handleCopy}>
      <button
        className={`${styles.clipboardButton} ${
          wasCopied ? styles.copied : ""
        }`}
      >
        <ClipBoardIcon />
      </button>
    </CopyToClipboard>
  )
}

export default index
