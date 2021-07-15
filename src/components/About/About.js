import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../images/me.png'

const About = ()=>
{
  return(
    <div className={classes.AboutMe} id="about">
      <PageHeader title={'About Me'}/>
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Hello! I am Selvakumar Balasubramani</h2>
          <p>
            I am Budding developer based in TamilNadu.
          <br></br>
          during my training period I completed lot of projects, 
            <br></br>and I attched my projects import 
            my github page.<br></br>below I attached my github account.</p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="me"></img>
        </div>
      </div>
    </div>
  );
}
export default About;