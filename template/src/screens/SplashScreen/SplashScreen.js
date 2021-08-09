import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'
import { Background, Flex } from '../../infrastructure/theme'

export default function SplashScreen () {
  const { t } = useTranslation()

  return (
        <View style={[Flex.flex1, Background.white, Flex.itemsCenter, Flex.justifyCenter]}>
            <Text>{t('data.name')}</Text>
        </View>
  )
}
