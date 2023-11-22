import { Link } from "@mui/material";

interface NavLinkProps {
  href: string;
  text: string;
}

const NavLink = (props: NavLinkProps): JSX.Element => {
  const { href, text } = props;

  return (
    <Link href={href} color={"rgba(#000000)"}>
      <a className="hover:underline w-fit">{text}</a>
    </Link>
  );
};

export default NavLink;
