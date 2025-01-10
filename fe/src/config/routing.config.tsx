import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MoruDigitalLayout from "../pages/layouts/moru-digital-intern.layout.pages";
import { MoruDigitalCreatePage, MoruDigitalPage } from "../pages/home";
import MoruDigitalEditPage from "../pages/home/moru-digital.edit.pages";
import MoruViewSinglePage from "../pages/home/moru-digital.view.pages";

const RoutingConfig = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<MoruDigitalLayout />}>
            <Route index element={<MoruDigitalPage />} />
            <Route path="create" element={<MoruDigitalCreatePage />} />
            <Route path="/:id/edit" element={<MoruDigitalEditPage />} />
            <Route path="/:id" element={<MoruViewSinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingConfig;
