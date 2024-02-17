interface Props {
  stack: string[];
}

const techstack: Record<string, string> = {
  React: "bg-sky-300",
  Django: "bg-green-800",
  "Node.js": "bg-emerald-600",
  Express: "bg-gray-400",
  OpenCV: "bg-red-500",
  NumPy: "bg-blue-400",
  C: "bg-sky-700",
  Typescript: "bg-sky-600",
  Matplotlib: "bg-sky-800",
  STM32: "bg-yellow-500",
  PostgreSQL: "bg-sky-700",
  MySQL: "bg-sky-700",
};

const Tech = ({ stack }: Props) => {
  return (
    <div style={{ width: "15vw" }}>
      {stack.map((tech) => (
        <div
          className={`${techstack[tech]} p-1 m-1 rounded-md text-white`}
          style={{ display: "inline-block", fontSize: "0.9em" }}
        >
          {tech}
        </div>
      ))}
    </div>
  );
};

export default Tech;
