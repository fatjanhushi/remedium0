<script context="module">
	export async function load({ params }) {
		const posts = await Promise.all(
			Object.entries(import.meta.glob('../../posts/*.md')).map(async ([path, resolver]) => {
				const { metadata } = await resolver()
				const slug = path.split('/').pop().slice(0, -3)
				return { ...metadata, slug }
			})
		)

		console.log(posts)

		return {
			props: {
				posts
			}
		}
	}
</script>

<script>
	export let posts
</script>

<h1>Blog page</h1>

{#each posts as post}
	<h3><a href={`/blog/${post.slug}`}>{post.title}</a></h3>
	<p>{post.excerpt}</p>
{/each}
