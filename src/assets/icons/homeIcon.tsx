import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function HomeIcon(props: SvgProps) {
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
        d="M5.8 12.76c0-1.358 0-2.037.274-2.634.275-.597.79-1.038 1.821-1.922l1-.857C10.76 5.75 11.69 4.95 12.8 4.95c1.11 0 2.041.799 3.905 2.396l1 .857c1.03.884 1.546 1.325 1.82 1.922.275.597.275 1.276.275 2.633V17c0 1.887 0 2.83-.586 3.415C18.628 21 17.686 21 15.8 21h-6c-1.886 0-2.828 0-3.414-.586C5.8 19.828 5.8 18.886 5.8 17v-4.24z"
        stroke={props?.color ? props?.color : "#495AFF"}
        strokeWidth={1.5}
      />
      <Path
        d="M15.3 21v-5a1 1 0 00-1-1h-3a1 1 0 00-1 1v5"
        stroke={props?.color ? props?.color : "#495AFF"}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default HomeIcon;
