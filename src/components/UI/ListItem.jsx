export default function ListItem({ children, ...props }) {
  return (
    <div
      className="card shadow-sm p-3 mb-3 bg-body rounded"
      {...props}
    >
      {children}
    </div>
  );
}
