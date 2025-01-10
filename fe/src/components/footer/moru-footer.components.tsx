import Playstore from "../../assets/images/Playstore.png";
import Applestore from "../../assets/images/Applestore.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MoruFooterComponent = () => {
  return (
    <>
      <div className="bg-rose-600">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex flex-wrap  items-center justify-evenly md:justify-between">
            <div className="flex flex-wrap items-center justify-evenly md:gap-10">
              <p className="md:w-72   text-white font-bold text-2xl text-center my-4">
                Download Moru App to Pay from anywhere
              </p>
              <div className="flex   gap-5 my-4 ">
                <a href="https://play.google.com/store/apps/details?id=com.paynep.moru&pli=1">
                  <img src={Playstore} alt="" className="h-12" />
                </a>
                <a href="https://apps.apple.com/us/app/moru-digital-wallet-nepal/id1497676739">
                  <img src={Applestore} alt="" className="h-12" />
                </a>
              </div>
            </div>

            <div className="flex gap-4 my-4">
              <a href="https://www.facebook.com/MoruOfficial">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="https://www.instagram.com/morudigitalwallet/">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="https://x.com/SocialMoru">
                <FaTwitter className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoruFooterComponent;
