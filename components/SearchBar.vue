<template>
	<b-field>
		<b-input placeholder="Search emoji..."
		rounded
		expanded
		type="search"
		icon-right="search"
		size="is-medium"
		></b-input>
	</b-field>
</template>

<script>
// v-bind:value="value"
// v-on:input="$emit('input', $event.target.value)"
export default {

}
</script>

<style scoped>
input.input {
	box-shadow: inherit;
	-webkit-box-shadow: inherit;
}
</style>
