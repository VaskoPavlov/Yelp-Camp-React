async function requester(method, url, data) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (method !== 'GET' && data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return; // No content
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'An error occurred');
        }

        return result;
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
}



export const get = (url, data) => requester('GET', url, data);
export const post = (url, data) => requester('POST', url, data);
export const put = (url, data) => requester('PUT', url, data);
export const del = (url, data) => requester('DELETE', url, data);
