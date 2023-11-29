<template>
  <div class="container">
  	<div>
	    <h3>Призначення</h3>
		 <div class="head">
			<p>Працівник</p>
			<p>Кандидат</p>
			<p>День тижня</p>
		 </div>
	    <div v-for="interview in getFillInterviewList" :key="interview.id">
	      <div class="interview-block">
	        <p>{{ interview.worker.name }} - {{ interview.worker.position }}</p>
	        <p>
	          {{ interview.candidate.name }} - {{ interview.candidate.position }}
	        </p>
	        <p>{{ interview.day }}</p>
	        <button
	          type="button"
	          class="button"
	          @click="deleteInterview(interview.id)">
	          Delete
	        </button>
	      </div>
	    </div>
	  </div>
	  <hr />
	  <div class="select-container">
	    <div>
	      <h3 class="select__title">Працівники</h3>
	      <div>
	        <select v-model="interViewData.workerId" class="select">
	          <option
	            v-for="worker in workersSelectList"
	            :key="worker.id"
	            :value="worker.id"
	            class="select__option">
	            {{ worker.name }} - {{ worker.position }}
	          </option>
	        </select>
	      </div>
	    </div>
	    <div>
	      <h3 class="select__title">Кандидати</h3>
	      <div>
	        <select v-model="interViewData.candidateId" class="select">
	          <option
	            v-for="candidate in candidatesSelectList"
	            :key="candidate.id"
	            :value="candidate.id"
	            class="select__option">
	            {{ candidate.name }} - {{ candidate.position }}
	          </option>
	        </select>
	      </div>
	    </div>
	    <div>
	      <h3 class="select__title">День тижня</h3>
	      <div>
	        <select v-model="interViewData.day" class="select">
	          <option
	            v-for="day in days"
	            :key="day.id"
	            :value="day.name"
	            class="select__option">
	            {{ day.name }}
	          </option>
	        </select>
	      </div>
	    </div>
	    <button
	      type="button"
	      class="select__button"
	      @click="addNewInterviews(interViewData)">
	      Призначити
	    </button>
	  </div>
	  <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { days } from "@/data/weekDays";

export default {
  name: "InterviewsView",
  data() {
    return {
      days: days,
      interViewData: {},
      candidatesSelectList: [],
      workersSelectList: [],
      message: null,
    };
  },
  computed: {
    ...mapGetters("workers", [
      "getWorkersList",
      "getWorkerById",
      "getWorkerFilteredList",
		'getFilterWorkersList'
    ]),
    ...mapGetters("candidates", [
      "getCandidatesList",
      "getFilterCandidatesByPosition",
      "getFilteredList",
      "getCandidateById",
    ]),
    ...mapGetters("interviews", ["getFillInterviewList", "getInterviewList"]),
  },
  watch: {
    "interViewData.workerId"(newWalue) {
      if (!this.interViewData.candidateId && newWalue) {
        const positionValue = this.getWorkerById(newWalue).position;
        this.filterCandidatesPosition(positionValue);
        this.candidatesSelectList = this.getFilteredList;
      }
    },
    "interViewData.candidateId"(newWalue) {
      if (!this.interViewData.workerId && newWalue) {
        const positionValue = this.getCandidateById(newWalue).position;
        this.filterWorkerPosition(positionValue);
        this.workersSelectList = this.getWorkerFilteredList;
      }
    },
  },
  created() {
    this.workersSelectList = this.getWorkersList;
    this.candidatesSelectList = this.getCandidatesList;
  },
  methods: {
    ...mapActions("interviews", ["addInterviews", "deleteInterview"]),
    ...mapActions("candidates", ["filterCandidatesPosition"]),
    ...mapActions("workers", ["filterWorkerPosition"]),
    addNewInterviews(interViewData) {
      if (
        this.interViewData.candidateId &&
        this.interViewData.workerId &&
        this.interViewData.day
      ) {
        this.addInterviews(interViewData);
        this.interViewData = {};
        this.workersSelectList = this.getWorkersList;
        this.candidatesSelectList = this.getCandidatesList;
        this.message = "";
      } else this.message = "Заповніть всі поля";
    },
  },
};
</script>

<style lang="scss" scoped>
.container{
	max-width: 1350px;
	margin: 0 auto;
	h3{
		text-align: center;
	}
	.head{
		max-width: 650px;
		margin: 0 auto;
		display: flex;
		font-size: 20px;
		font-weight: 700;
		justify-content: space-between;
		padding-right: 50px;
	}
}
.interview-block {
  margin: 0 auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr) auto;
  gap: 20px;
  align-items: center;
  text-align: center;
  button{
	cursor: pointer;
	border: none;
	padding: 10px 15px;
	border-radius: 5px;
	 @media (any-hover: hover){
		&:hover{
			background-color: rgba(0, 128, 0, 0.179);
		}
	 }
  }
}
.select-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.select {
  border-radius: 7px;
  min-width: 250px;
  padding: 5px;

  // .select__title
  &__title {
    text-align: center;
  }
  // .select__option
  &__option {
  }
  &__button {
    margin-left: 20px;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 16px;
    background-color: rgba(14, 177, 192, 0.484);
    align-self: flex-end;
  }
}
.message {
  text-align: center;
  color: red;
  font-size: 22px;
  margin-top: 50px;
}
</style>
