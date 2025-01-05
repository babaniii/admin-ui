import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ThemeContext from "../../context/themeContext";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { name } = useContext(AuthContext);

  return (
    <header className={`border-b-2 p-6 flex items-center justify-between ${theme.name}`}>
      <div className="flex">
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03">Oct 17, 2024</div>
      </div>
      <div className="flex">
        <div>Icon</div>
        <div className="ms-10 hidden sm:block">Search Box</div>
      </div>
    </header>
  );
};

export default Header;
