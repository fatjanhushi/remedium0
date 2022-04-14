/** @type {import('./[slug]').RequestHandler} */
export async function get({ params }) {
	const post = await import(`../../posts/${params.slug}.md`)
	console.log(post.default)
	console.log(post.metadata)

	return {
		body: {
			postContent: post.default,
			meta: post.metadata
		}
	}
}
