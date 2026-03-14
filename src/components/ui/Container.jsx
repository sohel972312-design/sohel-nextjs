export default function Container({ children, className = "" }) {
  return (
    <div className={`container px-3 mx-auto relative ${className}`}>
      {children}
    </div>
  );
}