import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ArrowLeftIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      x="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="#F2F2F2"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
