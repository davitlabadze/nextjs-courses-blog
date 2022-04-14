import PostItem from './post-item';
function PostsGrid(props) {
    const {posts} = props;
  return (
      <ul className='flex flex-wrap justify-evenly'>
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
        ))}
      </ul>
  )
}

export default PostsGrid;