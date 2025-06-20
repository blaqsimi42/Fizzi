import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx  from 'clsx';


type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    className?: string;
};

export default function Button({buttonLink, buttonText,
  className }: Props) {
    return (
  <PrismicNextLink 
  className =
  {clsx(
    "rounded-xl bg-orange-500 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors hover:bg-orange-700 md:text-2xl duration-150",
     className,
    )}
    field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
    );
  
}