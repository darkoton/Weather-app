import * as React from "react"
import Svg, { Path } from "react-native-svg"
const PlusIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#3C335E"
      d="M18.282 8.31h-6.367v-6.6a1.71 1.71 0 1 0-3.42 0v6.6H1.702C.765 8.31 0 9.074 0 10.02c0 .944.765 1.71 1.71 1.71h6.793v6.56a1.71 1.71 0 1 0 3.42 0v-6.56h6.367A1.71 1.71 0 0 0 20 10.02a1.724 1.724 0 0 0-1.718-1.71Z"
    />
  </Svg>
)
export default PlusIcon
