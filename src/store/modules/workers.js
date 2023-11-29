import { workers } from "@/data/workers";
export default {
  namespaced: true,
  state: {
    workersList: workers,
    filteredList: [],
  },
  getters: {
    getWorkersList: ({ workersList }) => workersList,
    getWorkerById: (state) => (workerId) => {
      return state.workersList.find((worker) => worker.id == workerId);
    },
    getWorkerFilteredList: ({ filteredList }) => filteredList,
  },
  mutations: {
    deleteWorkers(state, workerId) {
      state.workersList = state.workersList.filter(
        (worker) => worker.id !== workerId
      );
    },
    changeWorkersData(state, updateWorkers) {
      const findIndex = state.workersList.findIndex(
        (worker) => worker.id === updateWorkers.id
      );
      state.workersList[findIndex] = updateWorkers;
    },
    addNewWorker(state, workerData) {
      state.workersList.push(workerData);
    },
    filterWorkerPosition(state, position) {
      if (position) {
        state.filteredList = [
          ...state.workersList.filter((worker) =>
            worker.position.toLowerCase().includes(position.toLowerCase())
          ),
        ];
      } else {
        state.filteredList = state.workersList;
      }
    },
  },
  actions: {
    deleteWorkers({ commit }, workerId) {
      commit("deleteWorkers", workerId);
    },
    changeWorkersData({ commit }, workerId) {
      commit("changeWorkersData", workerId);
    },
    addNewWorker({ commit }, workerData) {
      commit("addNewWorker", {
        id: new Date().getTime(),
        ...workerData,
      });
    },
    filterWorkerPosition({ commit }, position) {
      commit("filterWorkerPosition", position);
    },
  },
  modules: {},
};
