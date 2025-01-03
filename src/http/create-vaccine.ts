import { api } from "@/lib/axios"

interface CreateVaccineRequest {
  name: string
  lot: string
  applicationDate: Date,
  expirationDate: Date,
  petsId: string
}

export async function createVaccine({
  name,
  lot,
  applicationDate,
  expirationDate,
  petsId
} : CreateVaccineRequest) {
  await api.post('/vaccines', {
    name,
    lot,
    applicationDate,
    expirationDate,
    petsId
  })
}