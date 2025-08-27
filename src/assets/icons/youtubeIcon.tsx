import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function YoutubeIcon(props: SvgProps) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      x="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.867 9.526L9.184 11.06V7.993l2.683 1.533z"
        fill="#fff"
        fillOpacity={0.7}
        stroke="#fff"
        strokeOpacity={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.666 10.069V8.983c0-2.219 0-3.33.694-4.043.694-.714 1.788-.745 3.973-.807 1.035-.03 2.093-.05 3-.05.906 0 1.963.02 2.999.05 2.185.062 3.279.093 3.972.807.694.715.695 1.825.695 4.043v1.085c0 2.22 0 3.33-.694 4.044-.694.714-1.787.745-3.973.807-1.035.03-2.093.05-3 .05-.906 0-1.963-.02-2.999-.05-2.185-.062-3.279-.092-3.973-.807-.695-.714-.694-1.824-.694-4.043z"
        stroke="#fff"
        strokeOpacity={0.7}
      />
    </Svg>
  );
}

export default YoutubeIcon;
