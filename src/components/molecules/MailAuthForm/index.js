import React from 'react';
import styles from './styles.css';
import { PrimaryButton } from '../../atoms/Button/index.js';
import TextBox from '../../atoms/TextBox/index.js';

const MailAuthForm = ({ onSubmit, ...props }) => (
  <form { ...props }>
    <p className={ styles.label }>メールを入力してください</p>
    <div className={ styles.controls }>
      <TextBox className={ styles.textbox } />
      <PrimaryButton onClick={ onSubmit }>認証メール送信</PrimaryButton>
    </div>
  </form>
);

export default MailAuthForm;
