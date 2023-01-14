import "./style.css";

export default function Button(props) {
  console.log(props);
  function handleClick(e) {
    if (props.disabled) return;
    props.onClick && props.onClick(e);
  }

  return (
    <button
      type="button"
      {...props}
      className={`button ${props.className || ""}`}
      onClick={handleClick}
    >
      {props.title || props.children}
    </button>
  );
}
