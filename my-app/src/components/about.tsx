import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import Link from "next/link";



function About () {
    return (
    <div className="header-container">
       <div className="header-boxes-container">
        {/*left*/}
        <div>
        <Image src={"/images/profile.jpg"} alt="profile" height={200} width={200} />
        </div>
        {/*right*/}
        <div className="hero-right-div">
        <h1 className="title-hero">
            About Me
        </h1>
        <p className="des-hero">Welcome to my portfolio! I'm Daraiba, front-end developer with a passion for creating impactful, thoughtful work . My focus is on UX/UI design, responsive web development, data analysis and I'm committed to blending creativity with technical skills to deliver projects that resonate and perform </p>
        
        
        </div>
       </div>
    </div>
    )
}
export default About;