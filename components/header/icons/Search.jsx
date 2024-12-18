import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SearchIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={18} height={18}>
    <Path
      fill="currentColor"
      d="m17.704 16.285-3.399-3.39a7.917 7.917 0 0 0 1.69-4.898 7.997 7.997 0 1 0-7.998 7.998 7.917 7.917 0 0 0 4.899-1.69l3.389 3.4a.999.999 0 0 0 1.42 0 .999.999 0 0 0 0-1.42ZM2 7.997a5.998 5.998 0 1 1 11.996 0A5.998 5.998 0 0 1 2 7.997Z"
    />
  </Svg>
)
export default SearchIcon
