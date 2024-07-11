import { Route, Routes } from "react-router-dom";

import DiaryPage from "../../page/DiaryPage/DiaryPage";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import AboutProduktPage from "../../page/AboutProduktPage/AboutProduktPage";
import CreateDish from "../../page/CreateDichPage/CreateDishPage";
import ModalAddRation from "../ModalAddRation/ModalAddRation";

function App() {
  return (
    <>
      <Header />
      <Navigation />

      {/* <DiaryPage /> */}
      <Routes>
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/about-produkt" element={<AboutProduktPage />} />
        <Route path="/create-dish" element={<CreateDish />} />
      </Routes>
      <ModalAddRation />
    </>
  );
}

export default App;
