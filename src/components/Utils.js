export function Loader() {
  return <p className="loader">Loading...</p>;
}
export function ErrorMessage({ message }) {
  return (
    <p className="error">
      <span>{message}</span>
    </p>
  );
}
