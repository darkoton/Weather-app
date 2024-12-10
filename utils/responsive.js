import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')
const BASE_WIDTH = 375
const BASE_HEIGHT = 709

export function gumHorizontal(value = 0) {
  return (width / BASE_WIDTH) * value
}

export function gumVertical(value = 0) {
  return (height / BASE_HEIGHT) * value
}