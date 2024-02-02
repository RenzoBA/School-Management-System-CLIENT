import Header from "@/components/dashboard/Header";
import AdminSidebar from "@/components/dashboard/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-row gap-4 bg-background-strong p-4">
      <AdminSidebar />
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
