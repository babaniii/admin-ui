import { useContext, useEffect } from "react";
import ThemeContext from "../../../context/themeContext";

const Card = (props) => {
  const { title = false, desc, variant } = props;
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
      document.body.className = theme.mode === "light" ? "light-mode" : "dark-mode";
    }, [theme.mode]);

  return (
    <div className={`flex flex-col flex-1 mb-6 ${variant}`}>
      {title && (
        <>
          {title.length == 1 ? (
            <div className="hidden md:block md:text-lg md:text-gray-02 md:mb-4">
              {title}
            </div>
          ) : (
            <div className="text-lg text-gray-02 mb-4">{title}</div>
          )}
        </>
      )}
      <div className={`rounded-lg px-6 py-5 shadow-xl flex-1 ${theme.mode === "light" ? "bg-special-mainBg" : "bg-dark-mode"}`}>
        {desc}
      </div>
    </div>
  );
};

export default Card;