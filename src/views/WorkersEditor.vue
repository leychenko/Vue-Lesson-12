<template>
	<div class="container">
		<div class="line">
			<label class="line__label">Ім'я</label>
			<input v-model="workerData.name"  class="line__input">
		</div>
		<div class="line">
			<label class="line__label">Посада</label>
			<input v-model="workerData.position"  class="line__input">
		</div>
		<button type="button" class="container__button" @click='onAdd'>{{buttonTitle}}</button>
	</div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
	export default {
		name:'WorkersEditor',
		data() {
			return {
				workerData: {}
			}
		},
		computed: {
			...mapGetters('workers',['getWorkerById']),

			receivedWorkerId(){
				return this.$route.params.id
			},
			buttonTitle(){
				return this.receivedWorkerId ? 'Update' : 'Save'
			}
		},
		created(){
			if(this.receivedWorkerId)
			this.workerData = {... this.getWorkerById(this.receivedWorkerId)}
		},
		methods: {
			...mapActions('workers',['changeWorkersData','addNewWorker']),
			onAdd() {
				if(!this.receivedWorkerId) this.addNewWorker(this.workerData)
				else this.changeWorkersData(this.workerData)

				this.$router.push({
					name:'workers'
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	max-width: 400px;
	gap: 15px;
			// .line__button
		&__button {
			align-self: flex-start;
			padding: 10px 15px;
			font-size: 16px;
			border-radius: 5px;
			border: none;
			cursor: pointer;
			transition: all 0.3s ease 0s;
			background-color: rgba(143, 169, 162, 0.871);
			@media (any-hover: hover){
				&:hover{
					background-color: rgba(143, 169, 162, 0.632);
					color: #fff;
				}
			}
		}
}
.line {
	display: flex;
		// .line__label
		&__label {
			flex: 0 1 30%;
			
		}
		// .line__input
		&__input {
			padding: 5px;
			flex: 0 1 60%;
		}
		
}



</style>