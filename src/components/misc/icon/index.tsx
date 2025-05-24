import "./style.css";

type IconProps = {
  name: string;
  fill?: boolean;
};

const Icon = ({ name, fill = false }: IconProps) => {
  return (
    <span data-icon data-fill={fill} className="material-symbols-outlined">
      {name}
    </span>
  );
};

export default Icon;
