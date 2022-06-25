import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  url: string;
  children: ReactNode;
}

export function NavLink({ url, children }: NavLinkProps) {
  return (
    <Link href={url}>
      <a>
        {children}
      </a>
    </Link>
  );
}