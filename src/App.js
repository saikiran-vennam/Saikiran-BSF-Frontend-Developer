import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components"
import {
  Homepage,
  Error,
  Capsules,
  Crew,
  SingleCrew,
  Dragons,
  SingleDragon,
  Rockets,
  SingleRocket,
  Starlink,
} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingleCrew />}></Route>
        <Route path="/dragons" element={<Dragons />}></Route>
        <Route path="/dragons/:id" element={<SingleDragon />}></Route>
        <Route path="/rockets" element={<Rockets />}></Route>
        <Route path="/rockets/:id" element={<SingleRocket />}></Route>
        <Route path="/starlink" element={<Starlink />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
