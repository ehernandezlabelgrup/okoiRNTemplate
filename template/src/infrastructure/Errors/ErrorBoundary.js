import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageError from './PageError'

class ErrorBoundary extends Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error) {
    console.log(error)
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
    // También puedes registrar el error en un servicio de reporte de errores
    // logErrorToMyService(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return <PageError />
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ErrorBoundary
