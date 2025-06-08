import { useEffect } from "react"
import Banner from "./components/Banner"
import Header from "./components/Header"
import Options from "./components/Options"
import { cellsCustom } from "./types"

function App() {

  useEffect(() => {
    if (localStorage.getItem("custom") == null) {
    localStorage.setItem("custom", JSON.stringify(cellsCustom))
    }
  }, [])

  return (
    <>
      <Header />
      <Banner />
      <Options />
    </>
  )
}

export default App
