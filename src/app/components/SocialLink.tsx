import Image, { StaticImageData } from "next/image";

interface SocialLinkProps {
  href: string;
  image: StaticImageData;
  alt: string;
}

const SocialLink = (props: SocialLinkProps): JSX.Element => {
  const { href, image, alt } = props;
  return (
    <button>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image src={image} width={18} alt={alt} />
      </a>
    </button>
  );
};

export default SocialLink;
