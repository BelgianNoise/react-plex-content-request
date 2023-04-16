
import { Dispatch, SetStateAction } from 'react';
import styles from './Input.module.css';

export interface TextInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: 'text' | 'password' | 'email';
  label?: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  autoComplete?: boolean;
  onEnter?: () => void;
  placeHolder?: string;
}

export function TextInput(props: TextInputProps) {
  const onKeyDown = (ev: any) => {
    if (props.onEnter && ev.key === 'Enter') {
      props.onEnter();
    }
  };

  return (
    <div className={styles.root}>
      {props.label ? (
        <label>{props.label}</label>
      ) : undefined}
      <div className={styles.inputDiv}>
        <input
          type={props.type ?? 'text'}
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
          autoComplete={props.autoComplete ? 'on' : 'off'}
          onKeyDown={onKeyDown}
          placeholder={props.placeHolder}
        />
        {props.icon ? ( <props.icon /> ) : undefined}
        <div className={styles.background}></div>
      </div>
    </div>
  );
}
