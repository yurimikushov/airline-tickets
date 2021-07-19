const extractTime = (date: Date): string => {
  return date.toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const addMinutes = (date: Date, minutes: number): Date => {
  return new Date(new Date(date).getTime() + minutes * 60 * 1000)
}

const flightDuration = (start: string, minutes: number): string => {
  const startDate = new Date(start)

  if (startDate.toString() === 'Invalid Date') {
    throw new Error('Passed invalid start date')
  }

  const startTime = extractTime(startDate)
  const endTime = extractTime(addMinutes(startDate  , minutes))

  return `${startTime} - ${endTime}`
}

export { flightDuration }
