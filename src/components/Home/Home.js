import classes from "./Home.module.css";
import code from './../../images/img.png';
const Home = ()=>
{
  return(
    <div className={classes.Home}id="home">
      <div className={classes.Container}>
      <h1>Hello,World.</h1>
      <h1>Welcome to my portfolio</h1>
    </div>
    <img className={classes.Code} src={code} alt="code"></img>
    
    </div>
  );
}
export default Home;