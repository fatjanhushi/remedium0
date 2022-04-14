<script>
	export let postContent, meta
	const { title, date, thumbnail } = meta
</script>

<h1>{title}</h1>
<p>{date}</p>
<img src={thumbnail} alt={title} />
<p>{postContent}</p>
