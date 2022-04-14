import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header'

const DUMMY_POSTS = {
    slug: 'next',
    title: 'Getting started with nextJS',
    image: 'next.png',
    date: '2022-05-14',
    content: '# This is a first post',
};


function PostContent() {
    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return <article className=' w-fit mt-12 bg-gray-500 shadow-xl rounded-xl p-6'>
        <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
}
export default PostContent;