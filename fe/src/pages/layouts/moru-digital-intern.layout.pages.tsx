import { Outlet } from "react-router-dom";
import MoruFooterComponent from "../../components/footer/moru-footer.components";
import MoruHeaderComponent from "../../components/header/moru-header.components";

const MoruDigitalLayout = () => {
  return (
    <>
      <MoruHeaderComponent />
      <Outlet />
      <MoruFooterComponent />
    </>
  );
};

export default MoruDigitalLayout;
