import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ISegment } from '../../../interfaces'

type SegmentProps = ISegment & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export type { SegmentProps }
