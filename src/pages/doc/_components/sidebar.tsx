import { Link, useParams } from "react-router-dom";
import COMPONENTS_GROUP from "@/data/components";

const Sidebar = () => {
  const { id } = useParams();

  return (
    <aside data-sidebar>
      {COMPONENTS_GROUP.map((item) => (
        <div key={item.group.id} className="group-box">
          <h4 className="group-name">{item.group.label}</h4>
          <ul className="group-components">
            {item.components.map((component) => (
              <li key={component.id} className="component-link">
                <Link
                  to={`/${component.id}`}
                  data-active={
                    component.id === id || (!id && component.id === "button")
                  }>
                  {component.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
