import { useContext, useEffect } from "react";
import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import ThemeContext from "../../context/themeContext";
import { NotifContext } from "../../context/notifContext";
import CustomizedSnackbars from "../Elements/Snackbar";
import SimpleBackdrop from "../Elements/Backdrop";
import ModeContext from "../../context/modeContext";

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
  const { mode } = useContext(ModeContext);

  useEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);

  return (
    <div className={`flex w-screen min-h-screen max-w-full ${theme.name} ${mode === "light" ? "bg-special-mainBg" : "bg-dark-mode"}`}>
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {isLoading && (
                  <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
                )}
                {msg && (
                  <CustomizedSnackbars
                  severity={msg.severity}
                  message={msg.desc}
                  open={open}
                  setOpen={setOpen}
                  />
                )}
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
