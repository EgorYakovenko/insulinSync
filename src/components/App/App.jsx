import { Route, Routes } from "react-router-dom";

import DiaryPage from "../../page/DiaryPage/DiaryPage";
import Navigation from "../Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <DiaryPage />
      <Routes>
        <Route path="/diary" element={<DiaryPage />} />
      </Routes>
    </>
  );
}

export default App;
