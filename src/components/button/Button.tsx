import styles from './Button.module.css';
import {ReactComponent as LoadingSVG} from '../../assets/loading.svg';
import { ReactElement } from 'react';

export interface ButtonProps {
  onClick: () => any;
  text: string;
  buttonStyle: 'primary' | 'secondary';
  icon?: ReactElement<any, any>;
  iconSide?: 'left' | 'right';
  loading?: boolean;
  disabled?: boolean;
  loadingEffect?: 'spinner' | 'wave';
};

export function Button(props: ButtonProps) {

  const handleClick = () => {
    if (!props.disabled && !props.loading) props.onClick();
  };

  let buttonClassName = `${props.buttonStyle} ${styles.button}`;
  if (props.loading && props.loadingEffect === 'wave') buttonClassName += ` ${styles.wave}`;
  const loadingVisible = props.loading && props.loadingEffect === 'spinner';
  const iconVisible = loadingVisible || props.icon;
  let iconContainerClass = `${styles.iconContainer} ${styles[props.iconSide ?? 'left']}`;
  if (loadingVisible) iconContainerClass += ` ${styles.loading}`;

  return (
    <div className={styles.root}>

      <button
        className={buttonClassName}
        onClick={handleClick}
        disabled={props.disabled}
      >
        {iconVisible ? 
          <div className={iconContainerClass}>
            {loadingVisible ? (<LoadingSVG />) : (<>{props.icon}</>)}
          </div>
        : undefined}

        {iconVisible && props.iconSide !== 'right' ? <div className={styles.spacer}></div> : undefined}
        <span>{props.text}</span>
        {iconVisible && props.iconSide === 'right' ? <div className={styles.spacer}></div> : undefined}
      </button>

    </div>
  );
}
