const baseURL = 'http://localhost:9000'
const parseResponse = response => response.json()
//headers wasnt setting fast enough for the getOneFetch so
// I made it a function
const headers = () => {
    return (
        {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    )
}

export const getFetch = (url) => {
    return fetch(`${baseURL}/${url}`, {
        method: "GET",
        headers: headers()
    })
    .then(parseResponse)
}

export const getOneFetch = (url, id) => {
    return fetch(`${baseURL}/${url}/${id}`, {
        method: "GET",
        headers: headers()
    })
    .then(parseResponse)
}

export const postFetch = (url, body) => {
    return fetch(`${baseURL}/${url}`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify(body)
    })
    .then(parseResponse)
}

export const deleteFetch = (url, id) => {
    return fetch(`${baseURL}/${url}/${id}`, {
        method: "DELETE",
        headers: headers()
    })
    .then(parseResponse)
}
