const extractTime = (date: Date): string => {
  return date.toLocaleTimeString('ru', {
    hour: '2-digit',
    minute: '2-digit',
  })
}

const addMinutes = (date: Date, minutes: number): Date => {
  return new Date(new Date(date).getTime() + minutes * 60 * 1000)
}

const flightDuration = (start: string, duration: number): string => {
  const startTime = extractTime(new Date(start))
  const endTime = extractTime(addMinutes(new Date(start), duration))

  return `${startTime} - ${endTime}`
}

export { flightDuration }
