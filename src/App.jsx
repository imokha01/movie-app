import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import CardList from "./component/CardList";

function App() {

  return (
    <div>
      <div className="bg-slate-800">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={(<Home />)} />
        <Route path="/movies/:id" element={(<CardList />)} />
      </Routes>
    </div>
  );
}

export default App;
