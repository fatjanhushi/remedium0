<script context="module">
	export async function load({ params }) {
		const post = await import(`../../posts/${params.slug}.md`)
		return {
			props: {
				postContent: post.default,
				meta: post.metadata
			}
		}
	}
</script>

<script>
	export let postContent, meta
	const { title, date, thumbnail } = meta
</script>

<h1>{title}</h1>
<p>{date}</p>
<img src={thumbnail} alt={title} />

<svelte:component this={postContent} />
