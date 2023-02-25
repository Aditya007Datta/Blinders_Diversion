import { Button, Highlight } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";


export const HomepageHero = () => (
    <Hero>

        <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="py-15">
                YOUR brand STORIES
                <br className="hidden md:block" /> Be the Creator
            </div>
        </HeroTitle>
        <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Look out for some amazing AI tools
            <br className="hidden md:block" /> that helps the lives of people easy
        </HeroSubtitle>
        <Button
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            href="/"
            variant="primary"
            size="large"
        >
            <span>Get Started </span>

        </Button>
        <HeroImage />
    </Hero>
);
