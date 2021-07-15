const minutesToHM = (minutes: number): string => {
  const h = Math.floor(minutes / 60)
  const m = minutes - h * 60

  if (h === 0) {
    return `${m}м`
  }

  return `${h}ч ${m}м`
}

export { minutesToHM }
