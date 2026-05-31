import useAuthStore from "../../store/authStore";

function Header() {
  const user = useAuthStore(
    (state) => state.user
  );

  return (
    <header
      className="
      h-16
      border-b
      border-slate-800
      bg-slate-900/70
      backdrop-blur-md
      flex
      items-center
      justify-between
      px-6
    "
    >
      <h1
        className="
        text-white
        text-xl
        font-bold
      "
      >
        Watch-Up
      </h1>

      <div
        className="
        flex
        items-center
        gap-4
      "
      >
        <span
          className="
          text-slate-300
          text-sm
        "
        >
          {user?.email}
        </span>
      </div>
    </header>
  );
}

export default Header;