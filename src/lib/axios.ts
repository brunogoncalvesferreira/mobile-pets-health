import axios from 'axios'

export const api = axios.create({
	//baseURL: 'http://10.0.2.2:8080',
	baseURL: 'http://192.168.100.88:8080',
})
