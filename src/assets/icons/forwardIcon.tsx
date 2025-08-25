import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ForwardIcon(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path d="M6 4l4 4-4 4" stroke="#fff" strokeWidth={1.33333} />
    </Svg>
  );
}

export default ForwardIcon;
