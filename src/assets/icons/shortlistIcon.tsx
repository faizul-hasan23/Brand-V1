import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function ShortlistIcon(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}
    >
      <Path
        d="M4.6 9c0-2.828 0-4.243.879-5.121C6.357 3 7.772 3 10.6 3h4c2.828 0 4.243 0 5.121.879.879.878.879 2.293.879 5.121v6.828c0 2.683 0 4.024-.844 4.435-.845.41-1.9-.419-4.01-2.076l-.675-.531c-1.186-.932-1.78-1.398-2.471-1.398-.692 0-1.285.466-2.471 1.398l-.676.53c-2.11 1.658-3.164 2.487-4.009 2.077-.844-.41-.844-1.752-.844-4.435V9z"
        stroke={props?.color ? props?.color : "gray"}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default ShortlistIcon;
