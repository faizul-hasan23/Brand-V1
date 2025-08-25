import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function TrandingIcon(props: SvgProps) {
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
        d="M16.25 5l-3.33 4.994a1.094 1.094 0 01-1.888-.117l-.502-1.004a1.094 1.094 0 00-1.888-.117l-3.33 4.994"
        stroke="#fff"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TrandingIcon;
