import { useState } from "react"

function Mode({ mode, setMode }) {
  return (
    <button onClick={() => {
      if (mode === "dark") setMode("light");
      else setMode("dark");

    }}>Mode</button>
  )
}
function Header({ mode, setMode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
      <h1>Title</h1>
      <Mode mode={mode} setMode={setMode} />
    </div>
  )
}
export default function App() {
  const [mode, setMode] = useState("dark");

  return (
    <div style={{ height: 2000, background: mode === "dark" ? "black" : "white", color: mode === "dark" ? "white" : "black" }}>
      <Header mode={mode} setMode={setMode} />
    </div>
  )
}