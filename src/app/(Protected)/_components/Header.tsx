"use client";
import logoutAction from "@/app/(Backend)/actions/auth/logoutAction";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Package2Icon, ReplyIcon, RotateCcw } from "lucide-react";
import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

function Header({ title }: { title: string }) {
  const router = useRouter();
  const logout = async () => {
    const response = await logoutAction();
    if (response.success) {
      router.push("/login");
    }
    if (response.error) {
      toast.error(response.error);
    }
  };
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b dark:border-b-zinc-700/30 bg-secondary px-6 dark:bg-secondary/30">
      <Link className="lg:hidden" href="#">
        <Package2Icon className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="flex-1">
        <h1 className="font-semibold text-lg">{title}</h1>
      </div>

      <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="https://vercel.com/api/www/avatar/KsiAhjUApMop2IPifCXWsbxt?s=64"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => router.push("/panel/setting")}>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default Header;
