import Header from "@/components/dashboard/Header";
import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background-strong flex h-screen flex-row gap-4 p-4">
      <AdminSidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
