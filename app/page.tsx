import Nav from "@/components/UI/Nav";
import HomeHero from "@/components/Home/HomeHero";
import AboutMe from "@/components/Home/AboutMe";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <HomeHero />
      <AboutMe />
    </main>
  );
}
