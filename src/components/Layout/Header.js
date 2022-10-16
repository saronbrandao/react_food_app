import React from 'react';

import HeaderCartButton from './HeaderCardButton';
import mealsImage from '../../assets/imgs/meals.jpg';
import logoImage from '../../assets/imgs/bb_burger_logo.svg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <div className={classes['sub-header']}>
          <img
            className={classes.logo}
            src={logoImage}
            alt="Kiwi standing on oval"
          />
          <h1>BB Burgers</h1>
        </div>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt={'A table full of delicious food!'} />
      </div>
    </React.Fragment>
  );
};

export default Header;
