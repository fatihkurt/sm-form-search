


export default function Input({ type="text", ...props}) {

  function handleChange(e) {
    props.onChange && props.onChange(e.target.value);
  }

  return (
    <input type={type} {...props} onChange={handleChange} />
  );
}