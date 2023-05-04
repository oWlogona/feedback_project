import Card from "../component/shared/Card";
import {Link} from "react-router-dom";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cum cumque debitis doloribus
                    esse facere iste, iure nam neque odio omnis pariatur quia soluta voluptatem! Ad aliquid atque autem
                    facilis harum in ipsa maxime modi nemo nostrum pariatur quam, quibusdam quisquam sequi suscipit
                    totam.</p>
                <p>
                    <Link to="/">Back to home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage;