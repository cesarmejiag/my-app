export default function Navigation({ options = [] }) {
  return (
    <nav>
      <ul>
        {options.map((option, index) => (
          <li key={`navigation-${index}`}><a href="#">{option}</a></li>
        ))}
      </ul>
    </nav>
  );
}
