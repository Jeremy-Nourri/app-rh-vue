<script setup>

import { onMounted } from 'vue';
import EmployeeItem from '../components/EmployeeItem.vue';
import { useEmployeesStore } from '../store/employeesStore';
import { RouterLink } from 'vue-router';

const employeesStore = useEmployeesStore();

onMounted( async () => {
  await employeesStore.fetchEmployees();
});

</script>

<template>
    <h1>Liste des employes</h1>

      <div class="add-employee">
        <RouterLink to="employees/add">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"  width="50" height="50" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        </RouterLink>
        <RouterLink to="employees/add">
        <p>Ajouter un employé</p>
      </RouterLink>

      </div>



    <div v-if="employeesStore.employees && employeesStore.employees.length > 0">
      <div v-for="employee in employeesStore.employees" :key="employee.id">
        <EmployeeItem :employee="employee" @delete-employee="employeesStore.deleteEmployee(employee.id)" />
      </div>
    </div>
    <div v-else>
      Chargement des employés...
    </div>
</template>

<style scoped>

  .add-employee {
    width: 220px;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    margin: 20px auto;

    p, svg {
      margin: 0;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    svg:hover {
      transform: scale(1.1);
    }

    p:hover {
      text-decoration: underline;
    }

  }
</style>