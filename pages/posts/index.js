import AllPosts from "../../components/posts/all-posts";
const DUMMY_POSTS = [
    { 
      slug: 'next',
      title:'started nextjs', 
      image:'next.png',
      excerpt:'nextJS is a the react framework for production',
      date:'2022-05-14',
    },
    { 
      slug: 'next',
      title:'started nextjs', 
      image:'next.png',
      excerpt:'nextJS is a the react framework for production',
      date:'2022-05-14',
    },
    { 
      slug: 'next',
      title:'started nextjs', 
      image:'next.png',
      excerpt:'nextJS is a the react framework for production',
      date:'2022-05-14',
    },
];

function AllPostsPage(props) {

    
    return <AllPosts  posts={DUMMY_POSTS} />
}

export default AllPostsPage;