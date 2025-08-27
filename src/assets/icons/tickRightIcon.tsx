import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TickRightIcon(props: SvgProps) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      x="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 9.5a9 9 0 11-18 0 9 9 0 0118 0z" fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 .5a9 9 0 110 18 9 9 0 010-18zm4.64 5.231a1.001 1.001 0 00-1.409.128l-3.597 4.319c-.347.415-.542.645-.697.787l-.006.005-.007-.004c-.168-.127-.383-.34-.766-.722L5.707 8.793a1 1 0 10-1.414 1.414l1.451 1.451c.341.341.67.673.974.904.286.216.65.421 1.105.453l.2.002.2-.02c.45-.073.794-.311 1.06-.553.281-.256.578-.616.887-.986l3.599-4.317a1.001 1.001 0 00-.128-1.41z"
        fill="#495AFF"
      />
    </Svg>
  );
}

export default TickRightIcon;
