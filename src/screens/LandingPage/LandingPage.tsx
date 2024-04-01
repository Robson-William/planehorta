import horta from "/horta.png";
import "./style.css";
import Button from "../../components/Button/Button";

export function LandingPage(){
    return (
        <>
            <div className="body landing-mode">
                <img src={horta} alt="Horta"/>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur. Augue elementum rhoncus scelerisque diam sapien arcu dignissim tincidunt nisi. Eu odio id purus nulla. Ipsum nec nunc ullamcorper purus dui tristique amet. Nunc tortor tortor semper et aliquet quam amet.
                    </p>
                    
                    <Button text="Comece a planejar sua horta!" className="landing-variation" />
                </div>
            </div>
        </>
    )
}