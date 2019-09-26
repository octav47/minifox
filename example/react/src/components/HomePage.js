import React, { Component } from 'react'
import withConnection from '../../../../dist/react/esm/withConnection'
import useMinifox from '../../../../dist/react/esm/useMinifox'

function Birds (props) {
  const { moduleMap, dispatch } = useMinifox('moduleMap')

  console.log(moduleMap)

  return <div>
    birds
  </div>
}

class HomePage extends Component {
  render () {
    return (
      <div>
        <Birds />
      </div>
    )
  }
}

export default HomePage
