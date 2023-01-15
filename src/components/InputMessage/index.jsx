
import './style.css';

export default function InputMessage({ type, ...props}) {
  return (
    <div className={`input-message ${type}`}>
      {props.children}
    </div>
  );
}