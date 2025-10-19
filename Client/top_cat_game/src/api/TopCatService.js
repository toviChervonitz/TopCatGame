const BASE_URL = 'http://localhost:3000/users/';

export async function getTopUsers(limit = 10) {
    const response = await fetch(`${BASE_URL}top?n=${limit}`);
    return response.json();
}

export async function getAllUsersWithRank() {
    const response = await fetch(`${BASE_URL}rankings`);
    return response.json();
}

