import styles from './Button.module.css';

export interface ButtonProps {
  onClick: () => any;
  text: string;
  style?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
};

export function Button(props: ButtonProps) {

  const handleClick = () => {
    if (!props.disabled && !props.loading) props.onClick();
  };

  return (
    <div className={styles.root}>

      <button
        className={props.style}
        onClick={handleClick}
        disabled={props.disabled}
      >
        {props.text}
      </button>

    </div>
  );
}
