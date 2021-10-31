import React from 'react'
import Styles from './input-styles.scss'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props: Props) => {
  const handleEnableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={handleEnableInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default Input
