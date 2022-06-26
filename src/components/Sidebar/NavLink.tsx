import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavLinkProps {
  url: string;
  children: ReactNode;
}

export function NavLink({ url, children }: NavLinkProps) {
  const { asPath } = useRouter();

  return (
    <Link href={url}>
      <a className={asPath === url ? 'active' : ''}>
        {children}
      </a>
    </Link>
  );
}