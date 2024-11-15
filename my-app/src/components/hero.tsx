import Image from "next/image";
import "../style/hero.css";




function Hero () {
    return (
    <div className="header-container">
       <div className="header-boxes-container">
        {/*left*/}
        <div>
        <Image src="/images/profile.jpg"alt="profile" height={200} width={200}></Image>
        </div>
        {/*right*/}
        <div className="hero-right-div">
        <h1 className="title-hero">I am DARAIBA
            Front-end Developer
        </h1>
        <p className="des-hero">Welcome to my website! As a front-end developer,My passion lies in crafting intuitive, responsive and accessible design </p>
        <button className="hero-btn">HIRE ME</button>
        
        </div>
       </div>
    </div>
    )
}
export default Hero;