<template>
    <div class="posts-page">
        <section class="posts-list">
			<PostList />
		</section>

    </div>
</template>

<script>
	import PostList from '@/components/Posts/PostList';
	export default {
		components: {
			PostList
		},
		
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