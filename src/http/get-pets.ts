import { api } from '../lib/axios'

export interface getMyPetsResponse {
	id: string
	name: string
	specie: string
	age: number
	breed: string
}

export async function getPets(tutorId: string) {
	const response = await api.get<getMyPetsResponse[]>(`pets/${tutorId}`)

	return response.data
}
