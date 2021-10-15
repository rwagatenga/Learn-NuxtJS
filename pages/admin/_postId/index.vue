<template>
    <div class="admin-new-post-page">
        <section class="new-post-form">
            <AdminPostForm :post="loadedPost"/>
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin',
	components: {
		AdminPostForm
	},
    data() {
        return {
            loadedPost: {
                author: 'Maximilian',
                title: 'My Awesome Post',
                content: 'Super Amazing, Thanks for That',
                thumbnailLink: "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
            }
        }
    },
	
}
</script>

<style scoped>
    .admin-new-post-page {
        align-content: center;
        align-items: center;
    }
	.admin-post-form {
		width: 90%;
		margin: 20px auto;
	}
	@media (min-width: 768px) {
		.new-post-form {
			width: 500px;
		}
	}
</style>