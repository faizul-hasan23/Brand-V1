import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function shareIcon(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M2.667 6c0-1.886 0-2.828.585-3.414C3.838 2 4.781 2 6.667 2h2.666c1.886 0 2.829 0 3.415.586.585.586.585 1.528.585 3.414v4.552c0 1.789 0 2.683-.563 2.957-.562.273-1.266-.28-2.672-1.385l-.45-.353c-.791-.622-1.187-.933-1.648-.933-.461 0-.857.311-1.648.933l-.45.353c-1.406 1.106-2.11 1.658-2.673 1.385-.562-.274-.562-1.168-.562-2.957V6z"
        stroke="#fff"
        strokeWidth={1.33333}
      />
    </Svg>
  );
}

export default shareIcon;
