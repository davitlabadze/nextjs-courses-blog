import Image from "next/image";

function Hero() {
    return <section className="text-center text-3xl bg-gradient-to-t from-gray-900 to-black text-white p-4">
        <Image src="/images/site/profile.jpeg" alt="profile image" width={300} height={300} className="rounded-full" />
        <h1>Hi, I'm Davit</h1>
        <p>
            I'm full stack web developer
        </p>
    </section>
}

export default Hero;