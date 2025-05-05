import { Navigate, Route, Routes } from "react-router-dom"
import Chatbot from "./pages/Chatbot"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Chatbot />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default App
