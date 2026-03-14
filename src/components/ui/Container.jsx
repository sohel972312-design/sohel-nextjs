export default function Container({ children, className = "" }) {
  return (
    <div className={`container px-3 mx-auto xl:w-[93%] xl:max-w-[93%] relative ${className}`}>
      {children}
    </div>
  );
}