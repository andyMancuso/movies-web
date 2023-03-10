import {
  Section,
  Header,
  Discover,
  Hero 
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
      <Section>Section3</Section>
    </div>
  );
};

export default Home;
