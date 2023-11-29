<template>
	<div class="container">
		<div class="line">
			<label class="line__label">Ім'я</label>
			<input v-model="candidateData.name"  class="line__input">
		</div>
		<div class="line">
			<label class="line__label">Посада</label>
			<input v-model="candidateData.position"  class="line__input">
		</div>
		<button type="button" class="container__button" @click='onAdd'>{{buttonTitle}}</button>
	</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex';


	export default {
		name:'CandidatesEditor',
		data() {
			return {
				candidateData: {},
			}
		},
		computed: {
			...mapGetters('candidates',['getCandidateById']),
			
			receivedCandidatesId(){
				return this.$route.params.id
			},
			buttonTitle(){
				return this.receivedCandidatesId ? 'Update' : 'Save'
			}
		},
		created () {
			if(this.receivedCandidatesId)
			this.candidateData = {...this.getCandidateById(this.receivedCandidatesId)}
		},
		methods: {
			...mapActions('candidates',['addNewCandidates','changeDataCandidates']),
			onAdd(){
				if(!this.receivedCandidatesId)this.addNewCandidates(this.candidateData)
				else this.changeDataCandidates(this.candidateData)
				
				this.$router.push({
					name:'candidates'
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