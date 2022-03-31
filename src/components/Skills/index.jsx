import { Circle } from 'react-circle';
import { requestStates } from '../../constants';
import { useSkills } from '../../customHooks/useSkills';
import classes from './Skills.module.scss';



export const Skills = () => {
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();


  return (
    <div className={classes.skills}>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h2>LANGUAGE</h2>
        </div>
        <div className={classes.grid}>
          {
            fetchRequestState === requestStates.loading && (
              <p className={classes.description}>取得中...</p>
            )
          }
          {
            fetchRequestState === requestStates.success && (
              sortedLanguageList().map((item, index) => (
                <div className={classes.item} key={index}>
                  <p className={classes.description}><strong>{item.language}</strong></p>
                  <Circle
                    animate
                    progress={converseCountToPercentage(item.count)}
                    progressColor="#555"
                    textColor="#555" 
                    roundedStroke={true}
                  />
                </div>
              ))
            )
          }
          {
            fetchRequestState === requestStates.error && (
              <p className={classes.description}>エラーが発生しました</p>
            )
          }
        </div>
      </div>
    </div>
  )
}