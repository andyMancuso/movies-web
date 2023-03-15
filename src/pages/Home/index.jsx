import {
  Section,
  Header,
  Discover,
  Hero,
  Theater
} from "../../components";

import styles from "./styles.module.css";

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
    </div>
  );
};

export default Home;
