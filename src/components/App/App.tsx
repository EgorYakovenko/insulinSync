import { Route, Routes } from "react-router-dom";

import DiaryPage from "../../page/DiaryPage/DiaryPage";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import AboutProduktPage from "../../page/AboutProduktPage/AboutProduktPage";
import CreateDish from "../../page/CreateDichPage/CreateDishPage";
import ModalAddRation from "../ModalAddRation/ModalAddRation";
import ModalCreateNewDish from "../ModalCreateNewDish/ModalCreateNewDish";
import HomePage from "../../page/HomePage/HomePage";
import AddRation from "../../page/AddRation/AddRation";
import AddNewDishPage from "../../page/AddNewDischPage/AddNewDishPage";

function App() {
  return (
    <>
      <Header />
      {/* <Navigation /> */}

      {/* <DiaryPage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/add-ration" element={<AddRation />} />
        <Route path="/about-produkt" element={<AboutProduktPage />} />
        <Route path="/create-dish" element={<CreateDish />} />
        <Route path="/add-new-dich" element={<AddNewDishPage />} />
      </Routes>
      {/* <ModalAddRation /> */}
      {/* <ModalCreateNewDish /> */}
    </>
  );
}

export default App;
