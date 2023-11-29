import { candidates } from "@/data/candidates";
export default {
  namespaced: true,
  state: {
    candidatesList: candidates,
    filteredList: [],
  },
  getters: {
    getCandidatesList: ({ candidatesList }) => candidatesList,
	 getFilteredList:({filteredList})=>filteredList,
    getCandidateById: (state) => (candidateId) => {
      return state.candidatesList.find(
        (candidate) => candidate.id == candidateId
      );
    },
    getFilterCandidatesByPosition: (state) => (candidatePosition) =>
      state.candidatesList.filter(
        (item) => item.position === candidatePosition
      ),
  },
  mutations: {
    addNewCandidates(state, candidates) {
      state.candidatesList.push(candidates);
    },
    filterCandidatesPosition(state, position) {
      if (position) {
        state.filteredList = [
          ...state.candidatesList.filter((candidate) =>
            candidate.position.toLowerCase().includes(position.toLowerCase())
          ),
        ];
      } else {
        state.filteredList = state.candidatesList;
      }
    },
    changeDataCandidates(state, candidate) {
      const findIndex = state.candidatesList.findIndex(
        (item) => item.id == candidate.id
      );
      state.candidatesList[findIndex] = candidate;
    },
    deleteCandidate(state, candidateId) {
      state.candidatesList = state.candidatesList.filter(
        (candidate) => candidate.id !== candidateId
      );
    },
  },
  actions: {
    addNewCandidates({ commit }, candidateData) {
      commit("addNewCandidates", {
        id: new Date().getTime(),
        ...candidateData,
      });
    },
    changeDataCandidates({ commit }, candidateId) {
      commit("changeDataCandidates", candidateId);
    },
    deleteCandidate({ commit }, candidateId) {
      commit("deleteCandidate", candidateId);
    },
    filterCandidatesPosition({commit},position){
		commit("filterCandidatesPosition",position);
	 }
  },
  modules: {},
};
