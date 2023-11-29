
export default {
  namespaced: true,
  state: {
    interviewList: [],
  },
  getters: {
    getInterviewList: ({ interviewList }) => interviewList,
    getFillInterviewList: (state, getters, rootState, rootGetters) =>
      state.interviewList.map((interview) => ({
        id: interview.id,
        worker: rootGetters["workers/getWorkerById"](interview.workerId),
        candidate: rootGetters["candidates/getCandidateById"](
          interview.candidateId
        ),
        day: interview.day,
      })),
  },
  mutations: {
    addInterviews(state, interViewData) {
      state.interviewList.push(interViewData);
    },
    deleteInterview(state, interviewId) {
      state.interviewList = state.interviewList.filter(
        (interview) => interview.id !== interviewId
      );
    },
  },
  actions: {
    addInterviews({ commit }, interViewData) {
      commit("addInterviews", {
        id: new Date().getTime(),
        ...interViewData,
      });
    },
    deleteInterview({ commit }, interviewId) {
      commit("deleteInterview", interviewId);
    },
  },
  modules: {},
};
