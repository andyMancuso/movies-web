import {
  Section,
  Header,
  Discover,
  Hero,
  Theater,
  News,
  Footer
} from "../../components";


const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Section>
        <Header />
        <Hero />
      </Section>
      <Section>
        <Discover />
      </Section>
      <Section>
        <Theater />
      </Section>
      <Section>
        <News />
      </Section>
        <Footer />
    </div>
  );
};

export default Home;
