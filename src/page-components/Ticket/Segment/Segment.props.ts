import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ISegment } from '../Ticket.props'

type SegmentProps = ISegment & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type { SegmentProps }
