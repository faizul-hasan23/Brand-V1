import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ArrowRightIcon(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      x="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.332 8l.707-.707.707.707-.707.707L13.332 8zm-10 1a1 1 0 010-2v2zm6-5l.707-.707 4 4-.707.707-.707.707-4-4L9.332 4zm4 4l.707.707-4 4L9.332 12l-.707-.707 4-4 .707.707zm0 0v1h-10V7h10v1z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ArrowRightIcon;
