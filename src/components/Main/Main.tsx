import { Container } from './styles';
import { Hero } from '../Hero/Hero';
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Portfolio } from '../Portfolio/Portfolio';
import { Skills } from '../Skills/Skills';

export function Main() {
    return (
        <Container>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </Container>
    );
}
