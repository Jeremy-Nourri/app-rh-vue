<script setup>
import { RouterLink } from 'vue-router';

const {employee} = defineProps(['employee']);

</script>

<template>
    <div class="employee-item">

        <table>
            <tr>
                <th>Nom</th>
                <td>{{employee.name}}</td>
            </tr>
            <tr>
                <th>Numéro d'identification</th>
                <td>{{employee.identificationNumber}}</td>
            </tr>
            <tr>
                <th>Adresse</th>
                <td>{{employee.address}}</td>
            </tr>
            <tr>
                <th>Téléphone</th>
                <td>{{employee.phone}}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{{employee.email}}</td>
            </tr>
            <tr>
                <th>Date de naissance</th>
                <td>{{employee.birthDate}}</td>
            </tr>
            <tr>
                <th>Début du contrat</th>
                <td>{{employee.contractStart}}</td>
            </tr>
            <tr>
                <th>Fin du contrat</th>
                <td>{{employee.contractEnd}}</td>
            </tr>
            <tr>
                <th>Occupation</th>
                <td>{{employee.occupation}}</td>
            </tr>
            <tr>
                <th>Admin</th>
                <td>{{employee.isAdmin}}</td>
            </tr>
            <tr>
                <th>Salaire</th>
                <td>{{employee.salary}}</td>
            </tr>
            <tr>
                <th>Observation</th>
                <td>{{employee.observation}}</td>
            </tr>
            <tr>
                <th></th>
                <td class="cell-buttons">
                    <div class="button-edit">
                        <RouterLink :to="'employees/edit/' + employee.id">Modifier</RouterLink>
                    </div>
                    <div class="button-delete">
                        <button @click="$emit('delete-employee', employee.id)">Supprimer</button>
                    </div>
                </td>
            </tr>
        </table>


    </div>

</template>

<style>

.employee-item {
    width: 70%;
    margin: 2rem auto;
    padding: 1rem;
    border: 2px solid #ddd;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
}
table {
    width: 100%;
    margin: auto;
    border-collapse: collapse;
}
th, td {
    border-bottom: 1px solid #ddd;
    padding: 1rem 0.5rem;
}

th {
    width: 20%;
    text-align: left;
    background-color: #9d9ea0;
    color:  white;
}

.cell-buttons {
    display: flex;
    justify-content: center;
}

button, .button-edit {
    width: 100px;
    display: block;
    margin: 0.6rem;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease;
}

button:hover, .button-edit:hover {
    opacity: 0.8;
}
</style>

