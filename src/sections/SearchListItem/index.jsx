import './style.css';

export default function SearchListItem(props) {
  const item = props.item;

  function renderUser(data) {
    return (
      <>
        <div className="search-list-item-title">Type: User</div>
        <div className="search-list-name">Name: {data.fullname}</div>
        <div className="search-list-name">Location: {data.country}  {data.city}</div>
        <div className="search-list-name">E-mail: {data.mail}</div>
      </>
    );
  }

  function renderCategory(data) {
    return (
      <>
        <div className="search-list-item-title">Type: Category</div>
        <div className="search-list-name">{data.name}</div>
      </>
    );
  }

  return (
    <div className="search-list-item">
      {item.type === "user" ? renderUser(item.data) : renderCategory(item.data)}
    </div>
  );
}
