export default function TaskMenuItem({ onClick, children }: any) {
  return (
    <li
      className="task-menu-item relative hover:cursor-pointer"
      onClick={onClick}
    >
      {children}
    </li>
  );
}
