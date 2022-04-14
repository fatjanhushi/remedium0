<script context="module">
	import { browser, dev } from '$app/env'
	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev
	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true

	/** @type {import('./[slug]').Load} */
	export async function load({ params }) {
		const post = await import(`../../posts/${params.slug}.md`)
		console.log(post)

		return {
			props: {
				postContent: post.default,
				postTitle: post.metadata.title
			}
		}
	}
</script>

<script>
	export let postContent, postTitle
</script>

<h1>{postTitle}</h1>
<p>{postContent}</p>
