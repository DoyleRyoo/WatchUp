import Header from "./Header";
import Sidebar from "./Sidebar";

function MainLayout({
  children,
}) {
  return (
    <div
      className="
      min-h-screen
      bg-slate-950
      text-white
    "
    >
      <Header />

      <div className="flex">
        <Sidebar />

        <main
          className="
          flex-1
          p-6
        "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;