import { NavLink } from "react-router-dom";

const menus = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Holdings",
    path: "/holdings",
  },
  {
    label: "Transactions",
    path: "/transactions",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <aside
      className="
      hidden
      md:block
      w-64
      border-r
      border-slate-800
      bg-slate-900/50
    "
    >
      <nav className="p-4">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className="
              block
              px-4
              py-3
              rounded-xl
              text-slate-300
              hover:bg-slate-800
              mb-2
            "
          >
            {menu.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;