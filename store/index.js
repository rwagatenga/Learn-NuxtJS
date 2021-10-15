import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit("setPosts", [
                              {
                                id: "1",
                                thumbnail:
                                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                                title: "Hello There - First time!",
                                previewText: "This my First post !",
                                author: "Rwagatenga",
                                content: "Some dummy data for nothing",
                                updatedDate: new Date()
                              },
                              {
                                id: "2",
                                thumbnail:
                                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                                title: "Hello There - Second time!",
                                previewText: "This my Second post !",
                                author: "Fred",
                                content: "Some dummy data for nothing",
                                updatedDate: new Date()
                              },
                              {
                                id: "3",
                                thumbnail:
                                  "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg",
                                title: "Hello There - Third time!",
                                previewText: "This my Third post !",
                                author: "FR RW",
                                content: "Some dummy data for nothing",
                                updatedDate: new Date()
                              }
                            ]);
                        resolve();
                  }, 1500);
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    }) 
}

export default createStore