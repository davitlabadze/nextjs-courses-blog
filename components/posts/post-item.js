import Image from "next/image";
import Link from "next/link"

function PostItem(props) {
    const { title, image,excerpt,date,slug} = props.post;
    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;
  return (
      <li className="w-96 border-2 shadow-xl text-center pb-2 rounded-2xl mt-10 bg-white">
          <Link href={linkPath}>
            <a>
                <div className="flex-shrink-0 ">
                    <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" className="object-cover rounded-t-2xl" />
                </div>
                <div>
                    <h3 className="text-xl">{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
          </Link>
      </li>
  )
}

export default PostItem