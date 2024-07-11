import { defineStore } from "pinia";
import { fetchEmployees, addEmployee, updateEmployee, deleteEmployee, fetchEmployeeById } from "../api/employees";
import router from "../router/router";

export const useEmployeesStore = defineStore("employeesStore", {
    state: () => ({
        employees: [],
        employee: {}
    }),

    actions: {
        async fetchEmployees() {
            try {
                const employees = await fetchEmployees();
                this.employees = employees;
            }
            catch (error) {
                console.error(error);
            }
        },
        async fetchEmployeeById(id) {
            try {
                const employee = await fetchEmployeeById(id);
                return employee;
            } catch (error) {
                console.error(error);
            }
        },
        async addEmployee(employee) {
            try {
                const newEmployee = await addEmployee(employee);
                this.employees.push(newEmployee);
            } catch (error) {
                console.error(error);
            }
        },
        async updateEmployee(employee, id) {
            try {
                await updateEmployee(employee, id);
                const index = this.employees.findIndex(c => c.id === id);
                this.employees[index] = employee;
            } catch (error) {
                console.error(error);
            }
        },
        async deleteEmployee(id) {
            try {
                await deleteEmployee(id);
                this.employees = this.employees.filter(c => c.id !== id);
                router.push("/employees");
            } catch (error) {
                console.error(error);
            }
        },



    }

});
