import Image from "next/image";

function PostHeader(props) {
    const {title,image} = props;
    return <header className="flex justify-around p-4 border-b-8 border-gray-900">
        <h1 className="text-7xl mt-12 mr-4">{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />
    </header>
}
export default PostHeader;