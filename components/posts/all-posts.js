import PostsGrid from './posts-grid';

function AllPosts(props){
    return <section>
        <h1>
            <PostsGrid posts={props.posts} />
        </h1>
    </section>
}

export default AllPosts;