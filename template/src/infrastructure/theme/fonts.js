import { StyleSheet } from 'react-native'

export const fontSize = StyleSheet.create({
  xxs: {
    fontSize: 8
  },
  xs: {
    fontSize: 10
  },
  sm: {
    fontSize: 12
  },
  base: {
    fontSize: 14
  },
  lg: {
    fontSize: 16
  },
  xl: {
    fontSize: 18
  },
  xl2: {
    fontSize: 20
  },
  xl3: {
    fontSize: 22
  },
  xl4: {
    fontSize: 24
  },
  xl5: {
    fontSize: 26
  },
  xl6: {
    fontSize: 28
  },
  xl7: {
    fontSize: 30
  },
  xl8: {
    fontSize: 32
  },
  xl9: {
    fontSize: 34
  },
  xl10: {
    fontSize: 36
  }
})

export const fontStyle = StyleSheet.create({
  italic: {
    fontStyle: 'italic'
  },
  normal: {
    fontStyle: 'normal'
  },
  underline: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline'
  }
})

export const lineHeight = StyleSheet.create({
  leadingLoose: {
    lineHeight: 2
  },
  leadingRelaxed: {
    lineHeight: 1.625
  },
  leadingNormal: {
    lineHeight: 1.5
  },
  leadingSnug: {
    lineHeight: 1.375
  },
  leadingTight: {
    lineHeight: 1.25
  },
  leadingNone: {
    lineHeight: 1
  }
})

export const fontFamily = StyleSheet.create({
  black: {
    fontFamily: ''
  },
  semibold: {
    fontFamily: 'OpenSans-SemiBold'
  },
  bold: {
    fontFamily: 'OpenSans-Bold'
  },
  regular: {
    fontFamily: 'OpenSans-Regular'
  },
  medium: {
    fontFamily: 'Roboto-Medium'
  },
  light: {
    fontFamily: ''
  },
  extrasemibold: {
    fontFamily: 'Raleway-SemiBold'
  },
  extraregular: {
    fontFamily: 'Roboto-Regular'
  },
  extrabold: {
    fontFamily: 'Raleway-Bold'
  }

})
