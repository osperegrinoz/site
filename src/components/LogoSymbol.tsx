import Image from "next/image";

type Props = {
  size?: number;
  className?: string;
};

export function LogoSymbol({ size = 96, className }: Props) {
  return (
    <Image
      src="/peregrinoz-simbolo.PNG"
      width={size}
      height={size}
      alt="Peregrinoz"
      className={className}
    />
  );
}
