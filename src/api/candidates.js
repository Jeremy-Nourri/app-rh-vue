const BASE_URL = 'https://localhost:8080/candidates/';

export async function fetchCandidates() {
    try {
        const response = await fetch(BASE_URL)
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function addCandidate(candidate) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidate)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateCandidate(candidate) {
    try {
        const response = await fetch(BASE_URL + candidate.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidate)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function deleteCandidate(id) {
    try {
        const response = await fetch(BASE_URL + id, {
            method: 'DELETE',
            mode: 'cors',
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function fetchCandidateById(id) {
    try {
        const response = await fetch(BASE_URL + id);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}