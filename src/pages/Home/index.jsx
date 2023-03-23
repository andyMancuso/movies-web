import { Section, Header, Discover, Hero, Theater, News } from "../../components";

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
    </div>
  );
};

export default Home;
