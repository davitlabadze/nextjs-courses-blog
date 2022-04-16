
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturePosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

function HomePage(props) {
    return(
      <Fragment>
        <Head>
          <title>Davit's Blog</title>
          <meta name="description" content="I'm fullstack web developer" />
        </Head>
        <Hero />
        <FeaturePosts posts={props.posts} />
      </Fragment>
    )
}

export function getStaticProps(){
  const featurePosts = getFeaturedPosts();
  return {
    props: {
      posts: featurePosts
    }
  }
}

export default HomePage;