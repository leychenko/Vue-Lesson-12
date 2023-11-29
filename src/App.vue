<template>
  <nav>
    <router-link to="/">Головна</router-link> |
    <router-link :to="{name: 'workers'}">Працівники</router-link> |
    <router-link :to="{name: 'candidates'}">Кандитади</router-link> |
    <router-link :to="{name: 'interviews'}">Співбесіди</router-link>

  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
