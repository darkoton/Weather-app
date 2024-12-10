import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BurgerIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 1h18M1 9h8M1 17h13"
    />
  </Svg>
)
export default BurgerIcon
