<script setup>

const candidate = defineProps(['candidate']);

</script>

<template>
    <div>
        <h2>{{candidate.name}}</h2>
        <p>{{candidate.identificationNumber}}</p>
        <p>{{candidate.address}}</p>
        <p>{{candidate.phone}}</p>
        <p>{{candidate.email}}</p>
        <p>{{candidate.birthDate}}</p>
        <p>{{candidate.rating}}</p>
        <p>{{candidate.observation}}</p>
        <p>{{candidate.skill}}</p>
        <p>{{candidate.technicalArea}}</p>
        <p>{{candidate.jobInterviewDate}}</p>
    </div>

</template>