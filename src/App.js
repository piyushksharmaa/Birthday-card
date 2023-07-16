import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import Mainpage from "./Mainpage";
import Mainpage2 from "./Mainpage2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/main2" element={<Mainpage2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
