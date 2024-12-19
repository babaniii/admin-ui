import { Link } from "react-router-dom";
import { Icon } from "@components/Icon";
import Logo from "../Elements/Logo";
import { useState } from "react";

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
  
  const [theme, setTheme] = useState(themes[0]);

  return (
    <div className={`bg-defaultBlack ${theme.name}`}>
      <nav className="sticky top-0 text-special-bg2 sm:w-72 w-28 min-h-screen px-7 py-12 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-10">
            <Logo variant="text-primary text-2x1" />
          </div>
          {menus.map((menu) => (
            <Link to={menu.link} key={menu.id}>
              <div className="flex items-center hover:bg-[var(--color-primary)] hover:text-white px-4 py-3 rounded-md transition duration-200 ease-in-out">
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
              className={`${t.bgcolor} md:w-6 h-6 rounded-md cursor-pointer mb-2`}
              onClick={() => setTheme(t)}
            ></div>
          ))}
        </div>
        <div className="mx-auto w-full">
          <Link to="/logout">
            <div className="flex bg-special-bg3 px-4 py-3 rounded-md hover:text-white">
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
              <div className="text-white font-bold">Username</div>
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
