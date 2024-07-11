import { defineStore } from "pinia";
import { fetchCandidates } from "../api/candidates";

export const useCandidatesStore = defineStore("candidatesStore", {
    state: () => ({
        candidates: [],
        candidate: {}
    }),

    actions: {
        async fetchCandidates() {
            try {
                const candidates = await fetchCandidates();
                this.candidates = candidates;
            }
            catch (error) {
                console.error(error);
            }
        }
    }

});
