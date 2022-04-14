
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturePosts from '../components/home-page/featured-posts';

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
function HomePage() {
    return(
      <Fragment>
        <Hero />
        <FeaturePosts posts={DUMMY_POSTS} />
      </Fragment>
    )
    
}

export default HomePage;