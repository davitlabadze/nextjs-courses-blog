import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header'


function PostContent(props) {
    const {post} = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`
    return <article className=' w-fit mt-12 bg-gray-500 shadow-xl rounded-xl p-6'>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
}
export default PostContent;