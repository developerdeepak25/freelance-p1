// const Wave = () => {
//   return (
//     <svg
//       width="738"
//       height="167"
//       viewBox="0 0 738 167"
//       fill="none"
//     >
//       <path
//         d="M803.806 423.221C767.502 438.804 738.403 447.308 738.403 447.308H-230.819C-230.819 447.308 -335.054 426.687 -444.208 351.693C-481.239 326.254 -496.689 294.764 -494.334 263.421C-489.796 202.365 -417.673 141.867 -305.817 127.708C-136.526 106.294 -132.612 29.64 85.8695 6.59536C304.351 -16.4346 433.458 36.455 433.458 36.455C646.916 114.034 883.064 151.399 936.723 262.554C937.659 264.508 938.525 266.461 939.252 268.385C966.965 338.959 872.499 393.758 803.806 423.221Z"
//         fill="url(#paint0_linear_13635_4245)"
//       />
//       <defs>
//         <linearGradient
//           id="paint0_linear_13635_4245"
//           x1="215.143"
//           y1="-331.78"
//           x2="218.039"
//           y2="517.599"
//           gradientUnits="userSpaceOnUse"
//         >
//           <stop stopColor="#323232" />
//           <stop offset="1" />
//         </linearGradient>
//       </defs>
//     </svg>
//   );
// }

// export default Wave


import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Wave = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  const width = isSmallDevice ? 369 : 738;
  // const height = isSmallDevice ? 84 : 167;

  return (
    <svg
      width={width}
      // height={height}
      viewBox="0 0 738 167"
      fill="none"
    >
      <path
        d="M803.806 423.221C767.502 438.804 738.403 447.308 738.403 447.308H-230.819C-230.819 447.308 -335.054 426.687 -444.208 351.693C-481.239 326.254 -496.689 294.764 -494.334 263.421C-489.796 202.365 -417.673 141.867 -305.817 127.708C-136.526 106.294 -132.612 29.64 85.8695 6.59536C304.351 -16.4346 433.458 36.455 433.458 36.455C646.916 114.034 883.064 151.399 936.723 262.554C937.659 264.508 938.525 266.461 939.252 268.385C966.965 338.959 872.499 393.758 803.806 423.221Z"
        fill="url(#paint0_linear_13635_4245)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13635_4245"
          x1="215.143"
          y1="-331.78"
          x2="218.039"
          y2="517.599"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#323232" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Wave;