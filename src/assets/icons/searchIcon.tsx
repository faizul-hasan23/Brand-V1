import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function SearchIcon(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Circle
        cx={11.4}
        cy={11}
        r={7}
        stroke={props?.color ? props?.color : "gray"}
        strokeWidth={1.5}
      />
      <Path
        d="M20.4 20l-3.5-3.5"
        stroke={props?.color ? props?.color : "gray"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SearchIcon;
