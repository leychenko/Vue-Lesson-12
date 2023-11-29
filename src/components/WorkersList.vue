<template>
  <div class="about">
    <h2 class="title">Працівники :</h2>
    <div class="container">
      <div v-for="worker in getWorkersList" :key="worker.id" class="item">
        {{ worker.name }} - {{ worker.position }}
        <div class="item__action">
          <button type="button" class="item__button item__button_edit button" @click="onEdit(worker.id)">Edit</button>
          <button type="button" class="item__button item__button_delete button" @click="deleteWorkers(worker.id)">Delete</button>
        </div>
      </div>
    </div>
	<router-link :to="{name:'workers-edit'}" class="linkWorker">Додати працівника</router-link>
  </div>
</template>
<script>
import { mapGetters,mapActions } from "vuex";
export default {
  name: "WorkersList",
  computed: {
    ...mapGetters("workers", ["getWorkersList"]),
  },
  methods: {
	...mapActions('workers',['deleteWorkers']),
	onEdit(workerId){
		this.$router.push({
			name:'workers-edit',
			params:{
			id:workerId}
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
.item {
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;
	font-size: 18px;
		// .item__action
		&__action {
			display: flex;
			gap: 10px;
		}
		// .item__button
		&__button {
			padding: 10px 15px;
			background-color: rgba(117, 116, 116, 0.776);
			font-size: 16px;
			color: #fff;
			border: none;
			border-radius: 3px;
			transition: background-color 0.3s ease 0s;
			cursor: pointer;
			// .item__button_delete
			&_delete {
				@media (any-hover: hover){
					&:hover{
						background-color: red;
					}
				}
			}
			&_edit {
				@media (any-hover: hover){
					&:hover{
						background-color: green;
					}
				}
			}
		}
}
.about{
	
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
