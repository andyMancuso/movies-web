import { Tags, Title, Actions, MetaData, Cover } from "../../components/index";

import styles from "./styles.module.css";

const Info = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
      <Tags>Action</Tags>
      <Tags>Action</Tags>
      </div>
      <Title></Title>
      <Actions></Actions>
      <MetaData></MetaData>
    </div>
  );
};

export default Info;
