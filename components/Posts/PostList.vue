<template>
    <section class="posts-list">
		<PostPreview
			v-for="(post, index) in posts" :key="index"
			id="post.id",
			:thumbnail="post.thumbnail"
			:title="post.title"
			:is-admin="isAdmin"
			:previewText="post.previewText"/>
		
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
			},
			posts: {
				type: Array,
				required: true
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