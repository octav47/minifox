import React, { Component } from 'react'
import connect from 'storeon/react/connect'

const withConnection = moduleName => T => {
  class D extends Component {
    constructor (props) {
      super(props)
    }

    componentDidMount () {

    }

    render () {
      const { ...rest } = this.props

      return <T {...rest} />
    }
  }

  return connect('moduleMap', D)
}

window.$r2 = React

export default withConnection
