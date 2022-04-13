<script context="module">
	/** @type {import('./[slug]').Load} */
	export function load({ params }) {
		const post = import.meta.glob(`../../posts/${params.slug}.md`)
		console.log(post)

		return {
			props: {
				post: params.slug
			}
		}
	}
</script>

<script>
	export let post
</script>

<h1>{post}</h1>
