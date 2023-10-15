import React from "react";
import iconsSprite from "../../assets/image/sprite.svg";

type IconPropsType = {
  iconId: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "100"}
      height={props.height || "100"}
      viewBox={props.viewBox || "0 0 100 100"}
      fill="none"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  );
};
