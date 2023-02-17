import {
  Info,
  Tags,
  Title,
  Actions,
  MetaData,
  Cover
} from './components/index'
import Button from '../Button'
import styles from './styles.module.css'

const Hero = () => {
    return (
      <div className={styles.container}>
        <Info>
          <Button>Play</Button>
        </Info>
        <Cover></Cover>
      </div>
      
    )
  }
  
  export default Hero