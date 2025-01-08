import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import ThemeContext from "../../context/themeContext";
import { Icon } from "../Icon";

const Header = () => {
  const { theme } = useContext(ThemeContext); // Mengambil tema
  const { name } = useContext(AuthContext);  // Mengambil nama dari context

  return (
    <header className={`border-b-2 p-6 flex items-center justify-between ${theme.name}`}>
      <div className="flex">
        {/* Menampilkan nama dari context yang sudah didekode dari token */}
        <div className="font-bold text-lg">{name}</div>
        <div className="ms-6 text-gray-03">Oct 17, 2024</div>
      </div>
      <div className="flex items-center">
        <div className="p-2">
          <Icon.Bell size={24} color={theme.color} />
        </div>
        <div className="ms-10 hidden sm:block p-2">
          <Icon.Sbox size={24} color={theme.color} />
        </div>
      </div>
    </header>
  );
};

export default Header;
