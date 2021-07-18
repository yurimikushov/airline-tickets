import { IState } from '../reducers'

const searchIdSelector = (state: IState): string => state.searchId

export { searchIdSelector }
