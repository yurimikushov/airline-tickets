const fetchSearchId = async (): Promise<string> => {
  const res = await fetch(`${process.env.REACT_APP_API}/search`)

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return ((await res.json()) as { searchId: string }).searchId
}

export { fetchSearchId }
