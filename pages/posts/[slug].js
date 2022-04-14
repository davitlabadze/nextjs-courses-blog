import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
   return <div className="flex justify-center">
      <PostContent post={props.post}/>
   </div>
}

export function getStaticProps(context){
   const {params} = context;
   const {slug} = params;

   const postData = getPostData(slug);

   return {
      props: {
         post:postData
      },
      revalidate: 600
   };
}

export function getStaticPaths(){
   const postFilenames =  getPostsFiles();
   const slugs = postFilenames.map(filename => filename.replace(/\.md$/, ''))


   return {
      paths: slugs.map((slug) => ({params: {slug:slug}})),
      fallback: false
   };
}

export default PostDetailPage;