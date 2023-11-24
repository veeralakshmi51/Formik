import { useState } from "react";
import BasicForm from './Components/BasicForm';
import AdvancedForm from "./Components/AdvancedForm";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");
  return (
    <div className="App">
      <nav>
        <h3
          onClick={() => setView("basic")} style={{color:view==='basic'?'forestgreen':''}}>
          Basic Form
        </h3>
        <h3
          onClick={() => setView("advanced")} style={{color:view==='advanced'?'forestgreen':''}}>
          Advanced Form
        </h3>
      </nav>
      {view === "basic" ? <BasicForm /> : <AdvancedForm />}
    </div>
  );
}

export default App;