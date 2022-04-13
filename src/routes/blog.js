export const get = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('../posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
			return { ...metadata, slug }
		})
	)

	console.log(posts)

	return {
		body: {
			posts
		}
	}
}
