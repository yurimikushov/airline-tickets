import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ITicket } from '../../interfaces'

type TicketProps = ITicket & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> 

export type { TicketProps }
