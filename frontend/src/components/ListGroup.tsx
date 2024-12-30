import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["New York", "Dubai", "Delhi", "Mumbai"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>No items Found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
