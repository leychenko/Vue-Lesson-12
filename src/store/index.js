import { createStore } from "vuex";
import workers from "@/store/modules/workers";
import candidates from "@/store/modules/candidates";
import interviews from "@/store/modules/interviews";


export default createStore({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    workers,
    candidates,
    interviews,
  },
});
