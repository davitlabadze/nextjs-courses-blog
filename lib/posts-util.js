import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'posts');

function getPostsData(fileName){
    const filePath = path.join(postsDirectory,fileName);
    const fileContent = fs.readFileSync(filePath,'utf-8');
    const {data,content} = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '');
    
    const postData = {
        slug: postSlug,
        ...data,
        content,
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory);

    const allPosts = postFiles.map(postFile => {
        return getPostsData(postFile);
    });
    allPosts.sort((postA,postB)=> postA.date > postB.data ? -1: 1);
    return sortPosts;
}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featurePosts = allPosts.filter(post => post.isFeatured);
    return featurePosts;
}