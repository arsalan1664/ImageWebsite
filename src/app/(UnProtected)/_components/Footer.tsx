import { GithubIcon, GlobeIcon, MusicIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

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
