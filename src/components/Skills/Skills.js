import PageHeader from '../PageHeader/PageHeader';
import classes from './Skills.module.css';
const skills=
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>REACTjs</li>
  <li>JS</li>
  <li>Mongo DB</li>
  <li>Node js</li>
</ul>
const totalSkills=[skills]

const Skills = ()=>
{
  return(
    <div className={classes.Skills}id="skills">
      <PageHeader title={'what about the skills..'}/>
      
      <div className={classes.Container}>
              {totalSkills.map(skills=>{
                return (
                  <div className={classes.List}>
                      {skills}
                  </div>

                )
              })}
      </div>
    </div>
  );
}
export default Skills;