import SimpleBar from 'simplebar-react';
import "./List.css";

export default function UserList({ title, children }) {
  return (
    <div className="UserList">
      <h3>{title}</h3>
      <SimpleBar style={{ maxHeight: 700}}>
        <ul className="UserList__content">
          {children}
        </ul>
      </SimpleBar>
    </div>
  );
}
