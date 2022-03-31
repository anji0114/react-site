import classes from './Contact.module.scss'


export const Contact = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <div className={classes.contents}>
          <h2 className={classes.title}>Contact to Me</h2>
          <p className={classes.description}>お仕事のご相談・ご依頼など下記よりご連絡ください。</p>
          <a href="https://twitter.com/" className={classes.btn}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};