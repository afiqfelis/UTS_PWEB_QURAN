import { Container } from "react-bootstrap";
import './About.css';

function About() {
    return (
        <>
            <Container className="about-wrapper">
                <p> <a className="about-link" href="https://api.quran.sutanlab.id/" target="_blank" rel="noreferrer">Quran API</a> </p>
                
            </Container>
        </>
    )
}

export default About;