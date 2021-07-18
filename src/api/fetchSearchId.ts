import { IFetchSearchIdResponse } from '../interfaces'

const fetchSearchId = async (): Promise<string> => {
  const res = await fetch(`${process.env.REACT_APP_API}/search`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  const { searchId }: IFetchSearchIdResponse = await res.json()

  return searchId
}

export { fetchSearchId }
