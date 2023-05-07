import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import MagicProvider from "./context/magic-context"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <MagicProvider>
      <App />
    </MagicProvider>
  </React.StrictMode>
)
