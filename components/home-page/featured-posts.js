import PostsGrid from "../posts/posts-grid";

function FeaturedPosts(props) {
    return <section className="bg-gray-700 h-screen">
        <PostsGrid posts={props.posts} />
    </section>
}

export default FeaturedPosts;