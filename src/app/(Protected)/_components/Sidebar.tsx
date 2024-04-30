"use client";
import logoutAction from "@/app/(Backend)/actions/auth/logoutAction";
import { ThemeToggle } from "@/components/ui/themeToggle";
import {
  Package2Icon,
  Tag,
  Boxes,
  FileText,
  LogOutIcon,
  Loader2,
  LayoutPanelTop,
  PieChart,
} from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const SidebarNav = [
  {
    title: "Dasboard",
    Icon: <PieChart className="h-4 w-4" />,
    link: "/panel",
  },
  {
    title: "Section",
    Icon: <LayoutPanelTop className="h-4 w-4" />,
    link: "/panel/sections",
  },
  {
    title: "Categories",
    Icon: <Boxes className="h-4 w-4" />,
    link: "/panel/categories",
  },
  {
    title: "Post",
    Icon: <FileText className="h-4 w-4" />,
    link: "/panel/post",
  },
  {
    title: "Tags",
    Icon: <Tag className="h-4 w-4" />,
    link: "/panel/tags",
  },
];

function Sidebar() {
  const pathname = usePathname();
  const [state, dipatch] = useFormState(logoutAction, null);
  if (state?.success) {
    redirect("/login");
  }

  return (
    <aside className="flex h-full min-h-screen flex-col gap-2">
      <div className="flex h-[60px] items-center border-b dark:border-b-zinc-700/30 px-6">
        <Link className="flex items-center gap-2 font-semibold" href="#">
          <Package2Icon className="h-6 w-6" />
          <span className="">Admin Panel</span>
        </Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
      <div className="flex-1 justify-between overflow-auto py-2">
        <nav className="grid items-start  px-4 text-sm font-medium">
          {SidebarNav.map((nav, i) => (
            <Link
              className={`link ${
                pathname === nav.link
                  ? "  text-foreground bg-purple-600/70"
                  : "text-foreground/60"
              } flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-foreground  dark:hover:text-foreground`}
              href={nav.link}
              key={i}
            >
              {nav.Icon}
              {nav.title}
            </Link>
          ))}
        </nav>
      </div>
      <form action={dipatch}>
        <DynamicButton title="Logout" />
      </form>
    </aside>
  );
}

export default Sidebar;

const DynamicButton = ({ title }: { title: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className="flex items-center gap-3 my-3 mx-4 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="animate-spin h-5 w-5 mr-2" /> Logout
        </>
      ) : (
        <div className="flex items-center gap-2">
          <LogOutIcon />
          {title}
        </div>
      )}
    </button>
  );
};
