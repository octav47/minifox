import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import MinifoxContext from '../../../../dist/react/esm/context'
import { store as minifoxStore } from '../../../../dist/react/esm/'
import App from './App'

window.$s1 = minifoxStore

export default class Root extends Component {
  render () {
    const { store, history } = this.props

    return (
      <Provider store={store}>
        <MinifoxContext.Provider value={minifoxStore}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </MinifoxContext.Provider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}
