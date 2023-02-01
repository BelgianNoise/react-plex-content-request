import styles from './Button.module.css';
import {ReactComponent as LoadingSVG} from '../../assets/loading.svg';

export interface ButtonProps {
  onClick: () => any;
  text: string;
  buttonStyle: 'primary' | 'secondary';
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
  const spinnerVisible = props.loading && props.loadingEffect === 'spinner';

  return (
    <div className={styles.root}>

      <button
        className={buttonClassName}
        onClick={handleClick}
        disabled={props.disabled}
      >
        {spinnerVisible ? 
          <div className={styles.spinnerContainer}>
            <LoadingSVG />
          </div>
        : undefined}

        {spinnerVisible ? <div className={styles.spacer}></div> : undefined}
        
        <span>{props.text}</span>
      </button>

    </div>
  );
}
