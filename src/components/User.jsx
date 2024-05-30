// User.js
export default function User({ name, email, address }) {
    return (
      <li>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
      </li>
    );
  }
  