import { Route, Routes } from "react-router-dom";

import DiaryPage from "../../page/DiaryPage/DiaryPage";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import AboutProdukt from "../../page/AboutProdukt/AbouteProdukt";
import CreateDish from "../../page/CreateDich/CreateDish";
import ModalAddRation from "../ModalAddRation/ModalAddRation";

function App() {
  return (
    <>
      <Header />
      <Navigation />

      {/* <DiaryPage /> */}
      <Routes>
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/about-produkt" element={<AboutProdukt />} />
        <Route path="/create-dish" element={<CreateDish />} />
      </Routes>
      <ModalAddRation />
    </>
  );
}

export default App;
