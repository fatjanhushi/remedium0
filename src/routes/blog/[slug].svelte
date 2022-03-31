<script context="module">
	export const load = ({ params }) => {
		console.log(params)
		return {
			props: {
				slug: params.slug
			}
		}
	}
</script>

<script>
	export let slug
</script>

<h1>{slug}</h1>
