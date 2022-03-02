import { Routes, Route } from "react-router-dom";
import Output from "./components/Output";
import UserInput from "./components/UserInput";
function App() {
  return (
    <Routes>
      <Route path="/" element={<UserInput />} />
      <Route path="/output" element={<Output />} />
    </Routes>
  );
}

export default App;
