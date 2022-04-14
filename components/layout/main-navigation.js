import Link from "next/link";
import Logo from "./logo";
function MainNavigation() {
    return <header className="p-12 bg-black flex justify-around text-white">
       <Link href="/" >
        <a>
        <Logo />
        </a>
       </Link>
        <nav>
            <ul>
                <li className="space-x-2">
                    <Link href="/posts">Posts</Link> 
                    <Link href="/contact">Contact</Link> 
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;