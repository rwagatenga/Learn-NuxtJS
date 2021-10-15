<template>
    <section class="posts-list">
		<PostPreview
			id="1",
			thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
			title="Hello There !"
			:is-admin="isAdmin"
			previewText="This my first post !"/>
		<PostPreview
			id="2",
			thumbnail="https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
			title="Hello There - Second time!"
			:is-admin="isAdmin"
			previewText="This my Second post !"/>
		<PostPreview
			id= "3"
			thumbnail= "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
			title="Hello There - Third time!"
			:is-admin="isAdmin"
			previewText="This my third post !"/>
	</section>
</template>

<script>
	import PostPreview from '@/components/Posts/PostPreview';
	export default {
		components: {
			PostPreview: PostPreview
		},
		props: {
			isAdmin: {
				type: Boolean,
				default: false
			}
		}
		
	}
	
</script>
<style scoped>
    .posts-page {
        display: flex;
        align-content: center;
        align-items: center;
    }
    .posts-list { 
		display: flex; 
		padding: 20px; 
		box-sizing: border-box; 
		flex-wrap: wrap; 
		align-items: center; 
		justify-content: center; 
	} 
</style>