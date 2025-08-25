import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function InstagramIcon(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <Path
        d="M3.5 9.5c0-2.828 0-4.243.879-5.121C5.258 3.501 6.672 3.5 9.5 3.5H11c2.828 0 4.243 0 5.121.879.878.879.879 2.293.879 5.121V11c0 2.828 0 4.243-.879 5.121-.879.878-2.293.879-5.121.879H9.5c-2.828 0-4.243 0-5.121-.879C3.501 15.242 3.5 13.828 3.5 11V9.5z"
        stroke="#fff"
        strokeWidth={0.9}
      />
      <Path
        d="M13.625 8a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill="#fff"
      />
      <Path
        d="M10.25 12.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        stroke="#fff"
        strokeWidth={0.9}
      />
    </Svg>
  );
}

export default InstagramIcon;
