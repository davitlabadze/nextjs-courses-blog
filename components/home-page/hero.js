import Image from "next/image";
import classes from "./hero.module.css"

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/profile.jpeg" alt="profile image" width={300} height={300}  />
        </div>
        <h1>Hi, I'm Davit</h1>
        <p>
            I'm full stack web developer
        </p>
    </section>
}

export default Hero;