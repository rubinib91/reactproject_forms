import { Routes, Route } from "react-router-dom";
import Form from "./Components/Form";
import DisplayData from "./Components/DisplayData";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/display" element={<DisplayData />} />
      </Routes>
    </>
  );
};

export default App;
