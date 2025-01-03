import { api } from "@/lib/axios"

interface CreateAppointmentsRequest {
  date: Date
  reason: string
  nameVet: string
  contactVet: string
  petsId?: string
}

export async function createAppointments({
  date,
  reason,
  nameVet,
  contactVet,
  petsId,
}: CreateAppointmentsRequest) {
  await api.post('/appointments', {
    date,
    reason,
    nameVet,
    contactVet,
    petsId,
  })
}