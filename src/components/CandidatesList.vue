<template>
     <div class="candidate">
     	 <h2 class="title">Кандидати :</h2>
	    <div class="container">
	      <div v-for="candidate in getCandidatesList" :key="candidate.id" class="item">
	        {{ candidate.name }} - {{ candidate.position }}
	        <div class="item__action">
	          <button type="button" class="item__button item__button_edit button" @click="onEdit(candidate.id)">Edit</button>
	          <button type="button" class="item__button item__button_delete button" @click="deleteCandidate(candidate.id)">Delete</button>
	        </div>
	      </div>
	    </div>
		<router-link :to="{name:'candidates-edit'}" class="linkWorker">Додати працівника</router-link>
     </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CandidatesView",

  computed: {
    ...mapGetters("candidates", ["getCandidatesList"]),
	 
  },

  methods: {
    ...mapActions("candidates", ["deleteCandidate"]),
	 onEdit(candidateId){
		this.$router.push({
			name:'candidates-edit',
			params:{
				id:candidateId
			}
		})
	 }
  },
};
</script>

<style lang="scss" scoped>
.container {
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 15px;
	border: 2px solid black;
	border-radius: 5px;
	padding: 20px;
	margin: 0 auto;
}
.title{
	text-align: center;
}
.candidate{
	
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	.linkWorker{
		padding: 10px;
		border-radius: 5px;
		text-decoration: none;
		background-color: rgb(7, 142, 2);
		color: #fff;
		font-size: 17px;
		border: 1px solid black;
		transition: background-color 0.3s ease 0s;
		@media (any-hover: hover){
			&:hover{
				background-color: rgba(7, 142, 2, 0.7);
			}
		}
	}
}
</style>