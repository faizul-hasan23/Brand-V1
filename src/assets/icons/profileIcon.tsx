import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

function ProfileIcon(props: SvgProps) {
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
        cx={12.2}
        cy={7}
        r={4}
        stroke={props?.color ? props?.color : "gray"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M5.538 18.32c.66-2.793 3.434-4.32 6.304-4.32h.715c2.871 0 5.644 1.527 6.305 4.32.128.541.23 1.107.287 1.682.054.55-.397.998-.949.998h-12c-.552 0-1.004-.449-.949-.998.057-.575.159-1.14.287-1.681z"
        stroke={props?.color ? props?.color : "gray"}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ProfileIcon;
