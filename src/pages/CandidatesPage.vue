<script setup>

import { onMounted } from 'vue';
import { useCandidatesStore } from '../store/candidatesStore';

const candidatesStore = useCandidatesStore();

onMounted( async () => {
  await candidatesStore.fetchCandidates();
});

</script>

<template>
    <div v-for="candidate in candidatesStore.candidates" :key="candidate.id">
        <CandidateItem :candidate="candidate" />
    </div>

</template>
  