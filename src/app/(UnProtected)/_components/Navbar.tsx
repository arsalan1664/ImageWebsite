import { ThemeToggle } from "@/components/ui/themeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-14 fixed top-0 z-50 px-10 border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          {/* <Image
            src="/logo.png"
            alt="logo"
            width={25}
            height={25}
            className="cursor-pointer hover:animate-slowspin"
          /> */}

          <span className="font-bold ml-[10px] hidden md:block text-foreground">
            {process.env.WEBSITE_NAME}
          </span>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
