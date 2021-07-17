import { ISort } from '../../interfaces'
import { IState } from '../reducers'

const sortSelector = (state: IState): ISort[] => state.sort

export { sortSelector }
