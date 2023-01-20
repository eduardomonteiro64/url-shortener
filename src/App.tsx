import React from "react"
import { AxiosError } from "axios"
import { Button, Input, URLHistory } from "./Components"
import styles from "./App.module.scss"

import { URLRegex, localShortnedURLs, gotinyAPI } from "./Utils/functions"

const App = () => {
  const [link, setLink] = React.useState<string>("")
  const [shortnedLink, setShortnedLink] =
    React.useState<string[]>(localShortnedURLs)
  const [error, setError] = React.useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (!link) return

    let error: string | null = null
    let data: IGotinyAPI | null = null

    try {
      const request = await gotinyAPI.post<IGotinyAPI[]>("", link)

      if (!URLRegex.test(link) || "error" in request.data)
        throw new Error("Link Inválido. Tente Novamente.")

      error = null
      data = request.data[0]
      setLink("")
    } catch (e: unknown) {
      if (e instanceof Error || e instanceof AxiosError) {
        error = e.message
        data = null
      }
    } finally {
      setError(error)
      setShortnedLink((prev) => {
        if (data) {
          localStorage.setItem(
            "shortnedURLs",
            JSON.stringify(["gotiny.cc/" + data.code, ...prev])
          )
          return ["gotiny.cc/" + data.code, ...prev]
        } else {
          return prev
        }
      })
    }
  }

  return (
    <section className={styles.mainPage}>
      <h1>Encurtador de Links</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.form}>
          <Input
            id="input"
            onChange={handleChange}
            value={link}
            autoComplete="off"
            placeholder="https://link-gigante/link.com"
          />
          <Button>Enviar</Button>
        </div>
        {error ?? <p className={styles.error}>{error}</p>}
      </form>
      <URLHistory shortnedLink={shortnedLink} />
    </section>
  )
}

export default App
