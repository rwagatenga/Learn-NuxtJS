<template>
    <div class="posts-page">
        <section class="posts-list">
			<div v-if="loadedPosts">
				<PostList :posts="loadedPosts"/>
			</div>
		</section>

    </div>
</template>

<script>
	import PostList from '@/components/Posts/PostList';
	export default {
		components: {
			PostList
		},
		
		asyncData(context) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({
						loadedPosts: [
							{
								id: "1",
								thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
								title: "Hello There - First time!",
								previewText: "This my First post !",
								author: 'Rwagatenga',
								content: 'Some dummy data for nothing',
								updatedDate: new Date()
							},
							{
								id: "2",
								thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
								title: "Hello There - Second time!",
								previewText: "This my Second post !",
								author: 'Fred',
								content: 'Some dummy data for nothing',
								updatedDate: new Date()
							},
							{
								id: "3",
								thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
								title: "Hello There - Third time!",
								previewText: "This my Third post !",
								author: 'FR RW',
								content: 'Some dummy data for nothing',
								updatedDate: new Date()
							}
						]
					})
				}, 1500);
			})
			.then(data => {
				return data
			})
			.catch(e => {
				context.error(new Error())
			})
		},
		// data() {
		// 	return {
				
		// 	}
		// },
		created() {}
		
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