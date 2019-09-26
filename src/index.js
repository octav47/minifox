import Connector from './entity/Connector'
import DOM from './entity/DOM'
import { store } from './store'
import { StoreContext } from './react/context'
import withConnection from './react/withConnection'
import useMinifox from './react/useMinifox'

const dom = new DOM()
const connector = new Connector({
  dom,
})

export {
  dom,
  connector,
  store,
  StoreContext,
  withConnection,
  useMinifox,
}
