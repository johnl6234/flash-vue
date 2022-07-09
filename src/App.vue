<template>
	<FlashTemplate />
	<button @click="openFlash">Open Flash</button>
</template>

<script>
	import FlashTemplate from './components/FlashTemplate.vue';
	export default {
		name: 'App',
		components: { FlashTemplate },
		methods: {
			openFlash() {
				this.$flash({
					type: 'success',
					title: 'Flash title',
					message:
						'Est aliquip sit consequat esse nostrud non id nulla ipsum ut aliqua reprehenderit. Elit id in ullamco et mollit sint. Ad exercitation pariatur culpa labore fugiat. Esse amet ut exercitation cupidatat exercitation. Amet labore consectetur ipsum aute.',
				});
			},
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
