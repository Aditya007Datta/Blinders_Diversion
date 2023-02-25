import { Container } from "@/components/container";
import { About } from "@/components/sections/about";
import { HomepageHero } from "@/components/sections/homepage-hero";


export default function Home() {
  return (

    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <About />
    </>

  )
}
