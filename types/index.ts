export type TicketStatus = 'new' | 'in_progress' | 'resolved'

export interface Ticket {
  id: string
  name: string
  email: string
  subject: string
  message: string
  status: TicketStatus
  created_at: string
}
