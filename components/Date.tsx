import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  if (!dateString) return <time>Work in Progress</time>
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL, yyyy')}</time>
}
