<script setup>
import { onMounted, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useEmployeesStore } from '../store/employeesStore'
import router from '../router/router';

const route = useRoute();

const employeesStore = useEmployeesStore()

const newEmployee = ref({
  name: '',
  identificationNumber: '',
  address: '',
  phone: '',
  email: '',
  birthDate: '',
  contractStart: '',
  contractEnd: '',
  occupation: '',
  password: '',
  isAdmin: false,
  salary: 0,
  observation: ''
});


onMounted(async () => {
  if(route.params.id){
    const employee = await employeesStore.fetchEmployeeById(route.params.id);
    newEmployee.value = employee;
  }
});



function submitForm(){

  if(route.params.id){

    employeesStore.updateEmployee({
      name: newEmployee.value.name,
      identificationNumber: newEmployee.value.identificationNumber,
      address: newEmployee.value.address,
      phone: newEmployee.value.phone,
      email: newEmployee.value.email,
      birthDate: newEmployee.value.birthDate,
      contractStart: newEmployee.value.contractStart,
      contractEnd: newEmployee.value.contractEnd,
      occupation: newEmployee.value.occupation,
      password: newEmployee.value.password,
      isAdmin: newEmployee.value.isAdmin,
      salary: newEmployee.value.salary,
      observation: newEmployee.value.observation
    }, route.params.id);

  }else{
    employeesStore.addEmployee(newEmployee.value);
  }
  newEmployee.value = {
    name: '',
    identificationNumber: '',
    address: '',
    phone: '',
    email: '',
    birthDate: '',
    contractStart: '',
    contractEnd: '',
    occupation: '',
    password: '',
    isAdmin: false,
    salary: 0,
    observation: ''
  }
  router.push("/employees");
}

</script>

<template>

<h1> {{route.params.id ? 'Modifier' : 'Ajouter'}} un employé </h1>

<form @submit.prevent="submitForm">
    <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" v-model="newEmployee.name" required />
    </div>

    <div class="form-group">
        <label for="identificationNumber">Numéro d'identification</label>
        <input type="text" id="identificationNumber" v-model="newEmployee.identificationNumber" required />
    </div>

    <div class="form-group">
        <label for="address">Adresse</label>
        <input type="text" id="address" v-model="newEmployee.address" required />
    </div>

    <div class="form-group">
        <label for="phone">Téléphone</label>
        <input type="tel" id="phone" v-model="newEmployee.phone" required />
    </div>

    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="newEmployee.email" required />
    </div>

    <div class="form-group">
        <label for="birthDate">Date de naissance</label>
        <input type="date" id="birthDate" v-model="newEmployee.birthDate" required />
    </div>

    <div class="form-group">
        <label for="contractStart">Début du contrat</label>
        <input type="date" id="contractStart" v-model="newEmployee.contractStart" required />
    </div>

    <div class="form-group">
        <label for="contractEnd">Fin du contrat</label>
        <input type="date" id="contractEnd" v-model="newEmployee.contractEnd" />
    </div>

    <div class="form-group">
        <label for="occupation">Occupation</label>
        <input type="text" id="occupation" v-model="newEmployee.occupation" required />
    </div>

    <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="newEmployee.password" required />
    </div>

    <div class="checkbox-group">
        <label for="isAdmin">Admin</label>
        <input type="checkbox" id="isAdmin" v-model="newEmployee.isAdmin" />
    </div>

    <div class="form-group">
        <label for="salary">Salaire</label>
        <input type="number" id="salary" v-model="newEmployee.salary" required />
    </div>

    <div class="form-group">
        <label for="observation">Observation</label>
        <textarea id="observation" v-model="newEmployee.observation"></textarea>
    </div>

    <button type="submit">Enregistrer</button>
</form>

</template>

<style scoped>

form {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

form input[type="text"],
form input[type="tel"],
form input[type="email"],
form input[type="date"],
form input[type="number"],
form input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

form input[type="checkbox"] {
    margin-right: 10px;
}

form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
}

form button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease;
}

form button[type="submit"]:hover {
    opacity: 0.8;
}

form input:focus, form textarea:focus {
    border-color: #007BFF;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

form .form-group {
    margin-bottom: 20px;
}

form .checkbox-group {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
</style>


