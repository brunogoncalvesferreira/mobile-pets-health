import { api } from "@/lib/axios"

interface CreateTutorRequest {
  name: string
  email: string
  password: string
}

export async function createTutor({
  name, email, password
}: CreateTutorRequest) {
  await api.post('/tutors', {
    name,
    email,
    password
  })
}