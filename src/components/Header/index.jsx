import ProfileImage from '../../images/profile-image.jpg';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import classes from './Header.module.scss'


export const Header = () => {
  return (
    <header className={classes.cover}>
      <div className={classes.container}>
        <div className={classes.table}>
          <div className={classes.tableContents}>
            <div className={classes.thumbnail} style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            <h1 className={classes.title}>ANJI TANAKA</h1>
            <h3 className={classes.titleText}>front-end engineer</h3>
            <ul className={classes.icons}>
              <li>
                <a href="https://twitter.com/anji14web" target="_blank">
                  <FaTwitter color='#fff' />
                </a>
              </li>
              <li>
                <a href="https://github.com/anji0114" target="_blank">
                  <FaGithub color='#fff' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};