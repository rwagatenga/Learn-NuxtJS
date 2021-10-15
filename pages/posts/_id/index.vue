<template>

    <div class="single-post-page">
        <section class="post">
            <h1>{{ loadedPosts.title}}</h1>
            <div class="post-details">
                <div class="post-detail">
                    Last updated on {{ loadedPosts.updatedDate}}
                </div>
                <div class="post-detail">
                    Written by {{ loadedPosts.author}}
                </div>
                <p>{{ loadedPosts.content}}</p>
            </div>
        </section>
        <section class="post-feedback">
            <p>
                Let me know what you think about the post, send a mail to 
                <a href="mailto:mail@domain.com">Mail@domain.com</a>
            </p>
        </section>
    </div>
</template>

<script>
	import PostList from '@/components/Posts/PostList';
	export default {
		components: {
			PostList
		},
		
		asyncData(contex, callback) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					callback(null, {
						loadedPosts: {
								id: "1",
								thumbnail: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
								title: "Hello There - First time!",
								previewText: "This my First post !",
								author: 'Rwagatenga',
								content: 'Some dummy data for nothing',
								updatedDate: new Date().getDate()
							},

					})
				}, 1500);
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
    .single-post-page { 
        padding: 30px; 
        text-align: center; 
        box-sizing: border-box; 
    } 
    .post { 
        width: 100%; 
    } 
    @media (min-width: 768px) { 
        .post { 
            width: 600px; 
            margin: auto; 
        } 
    } 
    .post-title { 
        margin: 0; 
    } 
    .post-details { 
        padding: 10px; 
        box-sizing: border-box; 
        border-bottom: 3px solid #ccc; 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        flex-direction: column; 
    } 
    @media (min-width: 768px) { 
        .post-details { 
            flex-direction: row; 
        } 
    } 
    .post-detail { 
        color: rgb(88, 88, 88); 
        margin: 0 10px; 
    } 
    .post-feedback a { 
        color: red; 
        text-decoration: none; 
    } 
    .post-feedback a:hover, .post-feedback a:active { 
        color: salmon; 
    } 
</style>