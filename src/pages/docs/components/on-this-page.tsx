import { useLocation, useParams } from "react-router-dom";
import { findComponent } from "@/util/helpers";
import type { ComponentIdDefinition } from "@/types/demo";

const OnThisPage = () => {
  const { component } = useParams();
  const { hash } = useLocation();

  function isActiveLink(id: string) {
    return hash === `#${id}` || (!hash && id === "overview");
  }

  const { content } = findComponent(component as ComponentIdDefinition);

  return (
    <aside className="on-this-page-area">
      <div className="guide-box">
        <h3 className="title">On this page</h3>
        <div className="actions">
          <ul className="main-links">
            {content.slice(0, 2).map((item) => (
              <li>
                <a
                  mui-button={isActiveLink(item.id) ? "filled" : "text"}
                  data-size="sm"
                  href={`#${item.id}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="example-links">
            <h4 className="subtitle">Examples</h4>
            <ul>
              {content.slice(2).map((item) => (
                <li>
                  <a
                    mui-button={isActiveLink(item.id) ? "filled" : "text"}
                    data-size="sm"
                    href={`#${item.id}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OnThisPage;
