import React from 'react';
import { create } from 'apisauce';

const backend_url = 'https://projectmanagement2023.onrender.com';
// const backend_url = 'http://127.0.0.1:3080';

const apiClient = create({
    baseURL: backend_url,
    headers: { Accept: 'application/vnd.github.v3+json' },
})

export default apiClient
