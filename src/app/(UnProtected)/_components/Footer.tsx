// import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

import { GithubIcon, GlobeIcon, MusicIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-background/40 py-12 border-t">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <Image src="/logo.png" alt="logo" width={25} height={25} />
//               <h5 className="text-lg font-semibold ">
//                 {process.env.WEBSITE_NAME}
//               </h5>
//             </div>
//             <p className="text-sm mb-4">
//               Stunning, complimentary images contributed by the world most
//               generous community of photographers. Superior to any royalty-free
//               or stock photos available.
//             </p>
//             <div className="flex space-x-6 md:order-2 mt-8">
//               <Link
//                 className="text-foreground hover:text-foreground/70"
//                 href="#"
//               >
//                 <TwitterIcon className="h-6 w-6" />
//               </Link>
//               <Link
//                 className="text-foreground hover:text-foreground/70"
//                 href="#"
//               >
//                 <FacebookIcon className="h-6 w-6" />
//               </Link>
//               <Link
//                 className="text-foreground hover:text-foreground/70"
//                 href="#"
//               >
//                 <InstagramIcon className="h-6 w-6" />
//               </Link>
//             </div>
//           </div>
//           <div>
//             <h5 className="text-lg font-semibold mb-4">Sections</h5>
//             <nav className="flex flex-col space-y-2 ">
//               <Link className="text-sm hover:underline" href="#">
//                 Explore
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Awards
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Education
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 iOS
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Apps & Plugins
//               </Link>
//             </nav>
//           </div>
//           <div>
//             <h5 className="text-lg font-semibold mb-4">Popular</h5>
//             <nav className="flex flex-col space-y-2 ">
//               <Link className="text-sm hover:underline" href="#">
//                 Backgrounds
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Free Images
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Free Stock Photos
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Happy Birthday Images
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Cool Photos
//               </Link>
//             </nav>
//           </div>
//           <div>
//             <h5 className="text-lg font-semibold mb-4">Wallpapers</h5>
//             <nav className="flex flex-col space-y-2">
//               <Link className="text-sm hover:underline" href="#">
//                 HD Wallpapers
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 4k Wallpapers
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 iPhone Wallpapers
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Cool Wallpapers
//               </Link>
//               <Link className="text-sm hover:underline" href="#">
//                 Cute Wallpapers
//               </Link>
//             </nav>
//           </div>
//         </div>

//         <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
//           <p className="text-sm text-foreground mb-4 md:mb-0">
//             © 2024 {process.env.WEBSITE_NAME}, Inc. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SrodmRDqmIC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border/40">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                alt="Logo"
                className="h-6 w-6"
                height="24"
                src="/logo.png"
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width="24"
              />
              <span>{process.env.WEBSITE_NAME}</span>
            </div>
            <div className="flex space-x-4">
              <TwitterIcon className="h-5 w-5" />
              <GithubIcon className="h-5 w-5" />
              <GlobeIcon className="h-5 w-5" />
              <MusicIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-4">Product</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Integrations
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Changelog
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Docs
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Linear Method
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-4">Company</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  About us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Customers
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Brand
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold mb-4">Resources</h6>
            <ul className="space-y-2">
              <li>
                <a className="hover:underline" href="#">
                  Help Center
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Tutorials
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary-foreground/30 py-4 text-center">
        <p className="text-xs text-muted-foreground">
          © 2024 {process.env.WEBSITE_NAME} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
