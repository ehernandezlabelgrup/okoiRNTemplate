import { useTranslation } from 'react-i18next'
import { showMessage } from 'react-native-flash-message'
import { colors } from '../../theme/color'

const useErrorMessage = () => {
  const { t } = useTranslation()
  const showErrorMessage = (code, message) => {
    console.log(code, 'mmm')
    switch (code) {
      case 401:
        showMessage({
          message: 'Credenciales incorrectas'
        })
        break

      case 404:
        showMessage({
          message: t('user.recoverErrorMessage'),
          backgroundColor: colors.primary
        })
        break

      case 400:
        showMessage({
          message: 'Usuario ya existe'
        })
        break

      case 703:
        showMessage({
          message
        })
        break
      case 701:
        showMessage({
          message
        })
        break

      default:
        showMessage({
          message: 'Ha ocurrido un error vuelva a intentarlo'
        })
        break
    }
  }

  return { showErrorMessage }
}

export default useErrorMessage
