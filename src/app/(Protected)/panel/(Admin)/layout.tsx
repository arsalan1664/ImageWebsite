import Header from "../../_components/Header";
import Sidebar from "../../_components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r dark:border-r-zinc-700/30 bg-secondary lg:block dark:bg-secondary/30">
        <Sidebar />
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}
