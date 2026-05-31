import MainLayout from "../components/layout/MainLayout";

function DashboardLayout({
  children,
}) {
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
}

export default DashboardLayout;