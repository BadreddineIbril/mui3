import type { ComponentProps } from "react";

type LogoProps = ComponentProps<"svg"> & {
  size?: "sm" | "md" | "lg";
};

const Logo = ({ size = "sm", ...props }: LogoProps) => {
  const SIZES = {
    sm: 40,
    md: 60,
    lg: 120,
  };

  return (
    <svg
      mui-logo=""
      xmlns="http://www.w3.org/2000/svg"
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 500 500"
      fill="none"
      {...props}>
      <path
        d="M116 366.498C165.5 214.998 247.5 124.717 261 133.607C274.5 142.498 236.5 292.998 235 312.608C233.5 332.217 340 150.217 342 173.607C344 196.998 314.5 324.498 317 333.608C319.5 342.717 385 290.608 385 290.608"
        stroke="currentColor"
        strokeWidth="30"
      />
      <rect
        x="106.727"
        y="347.05"
        width="29.9919"
        height="30"
        rx="14.996"
        transform="rotate(18.6232 106.727 347.05)"
        fill="currentColor"
      />
      <path
        d="M372.145 300.614C367.07 294.082 368.267 284.658 374.799 279.583V279.583C381.331 274.507 390.758 275.674 395.834 282.206V282.206C400.91 288.738 399.712 298.161 393.18 303.237V303.237C386.648 308.313 377.221 307.146 372.145 300.614V300.614Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
