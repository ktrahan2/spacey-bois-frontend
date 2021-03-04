const baseURL = 'http://localhost:9000'
const parseResponse = response => response.json()
//token was setting to slowly for the getOneFetch can maybe slow down
//that fetch instead of passing the token?
const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${window.localStorage.token}`
}

export const getFetch = (url) => {
    return fetch(`${baseURL}/${url}`, {
        method: "GET",
        headers: headers
    })
    .then(parseResponse)
}

export const getOneFetch = (url, id, token) => {
    return fetch(`${baseURL}/${url}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    .then(parseResponse)
}

export const postFetch = (url, body) => {
    return fetch(`${baseURL}/${url}`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    })
    .then(parseResponse)
}

export const deleteFetch = (url, id) => {
    return fetch(`${baseURL}/${url}/${id}`, {
        method: "DELETE",
        headers: headers
    })
    .then(parseResponse)
}
