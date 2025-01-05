import { Link } from "react-router-dom";
import { Icon } from "@components/Icon";
import Logo from "../Elements/Logo";
import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import { NavLink, useNavigate } from "react-router-dom";
import { NotifContext } from "../../context/notifContext";

const Navbar = () => {
  const menus = [
    {
      id: "overview",
      link: "/",
      icon: <Icon.Overview />,
      label: "Overview",
    },
    {
      id: "balance",
      link: "/balance",
      icon: <Icon.Balance />,
      label: "Balance",
    },
    {
      id: "transaction",
      link: "/transaction",
      icon: <Icon.Transaction />,
      label: "Transaction",
    },
    {
      id: "bills",
      link: "/bills",
      icon: <Icon.Bills />,
      label: "Bills",
    },
    {
      id: "expencess",
      link: "/expencess",
      icon: <Icon.Expencess />,
      label: "Expencess",
    },
    {
      id: "goals",
      link: "/goals",
      icon: <Icon.Goals />,
      label: "Goals",
    },
    {
      id: "settings",
      link: "/settings",
      icon: <Icon.Settings />,
      label: "Settings",
    },
  ];

  const themes = [
    { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
    { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
    { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
    { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
    { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
  ];
  
  const { theme, setTheme } = useContext(ThemeContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);
  const { name } = useContext(AuthContext);
  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const navigate = useNavigate();

  const refreshToken = localStorage.getItem("refreshToken");

  const Logout = async () => {
    setIsLoading(true);
    try {
      await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      setOpen(true);
      setMsg({severity: "succes", desc: "logout succes"});

    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      }
    }

      setIsLoggedIn(false);
      setName("");
      setIsLoading(false);
      localStorage.removeItem("refreshToken");

      navigate("/login");
  };

  return (
    <div className="bg-defaultBlack">
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-10">
            <Logo variant="text-primary" />
          </div>
          {menus.map((menu) => (
            <Link to={menu.link} key={menu.id}>
              <div className="flex items-center hover:bg-[var(--color-primary)] hover:text-white px-4 py-3 rounded-md transition duration-200 ease-in-out zoom-in">
                <div className="mx-auto sm:mx-0">{menu.icon}</div>
                <div className="ms-3 hidden sm:block">{menu.label}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:flex md:gap-2">
          Themes
          {themes.map((t) => (
            <div
              key={t.name}
              className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2 zoom-in`}
              onClick={() => setTheme(t)}
            ></div>
          ))}
        </div>
        <div className="mx-auto w-full">
        <Link to="#" onClick={Logout}>
          <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white zoom-in">
            <div className="mx-auto sm:mx-0">
              <Icon.Logout />
            </div>
            <div className="ms-3 hidden sm:block">Logout</div>
          </div>
        </Link>
          <div className="border-b my-10 border-b-special-bg"></div>
          <div className="flex items-center space-x-3">
            <div>
              <img
                src="images/profile.png"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold">{name}</div>
              <div className="text-xs">View Profile</div>
            </div>
            <div className="hidden sm:block self-center justify-self-end">
              <Icon.Kebab />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
