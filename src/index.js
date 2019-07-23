import Connector from './entity/Connector'
import DOM from './entity/DOM'

const dom = new DOM()
const connector = new Connector({
  dom
})

const minifox = () => {
  return{
    connector
  }
}

export default minifox
