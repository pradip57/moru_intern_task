import moruLogo from "../../assets/images/Moru_logo.png";

const MoruHeaderComponent = () => {
  return (
    <>
      <nav className="bg-slate-200  ">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex flex-wrap items-center justify-evenly md:justify-between">
            <a
              href="https://www.moru.com.np/home"
              className="flex items-center"
            >
              <img src={moruLogo} className="h-12" alt="Moru Logo" />
            </a>

            <p className="block py-2  text-red-700 rounded font-bold text-2xl">
              CRUD OPERATION
            </p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MoruHeaderComponent;
