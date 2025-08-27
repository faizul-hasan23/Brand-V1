import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function AddIcon(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      x="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12.5} r={8.4} stroke="#fff" strokeWidth={1.2} />
      <Path
        d="M12 8.5v8M16 12.5H8"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default AddIcon;
