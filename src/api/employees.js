const BASE_URL = 'http://localhost:8080/employees/';

export async function fetchEmployees() {
    try {
        const response = await fetch(BASE_URL)
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function fetchEmployeeById(id) {
    try {
        const response = await fetch(BASE_URL + id);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function addEmployee(employee) {
    try {
        const response = await fetch(BASE_URL + "create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(employee)
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function updateEmployee(employee, id) {
    try {
        console.log(JSON.stringify(employee));
        const response = await fetch(BASE_URL + "update/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(employee)
        });
        console.log(response);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteEmployee(id) {
    try {
        const response = await fetch(BASE_URL + "delete/" + id, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
