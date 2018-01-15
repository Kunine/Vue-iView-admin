import axios from './axios';

export function getTags(page) {
	return axios.get('/api/admin/tags/getList', { page });
}

export function add({ name }) {
	return axios.post('/api/admin/tags/add', { name });
}

export function edit(obj) {
	return axios.post('/api/admin/tags/edit', obj);
}

export function remove(id) {
	return axios.post('/api/admin/tags/remove', { id });
}

