// import { Link } from "@mui/material";
import Link from 'next/link'

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = (props: NavLinkProps): JSX.Element => {
  const { href, text } = props;

  return (
    <Link href={href} color={"rgba(#000000)"}>
      <p className="hover:underline w-fit">{text}</p>
    </Link>
  );
};

export default NavLink;
