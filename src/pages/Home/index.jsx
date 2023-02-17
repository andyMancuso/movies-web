import {
  Section,
  Header,
  Button,
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
      <Section>Section2</Section>
      <Section>Section3</Section>
    </div>
  );
};

export default Home;
