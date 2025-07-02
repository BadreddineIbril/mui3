import { useLocation, useParams } from "react-router-dom";
import { findComponent, findGetStartedLink } from "@/util/helpers";
import type { GetStartedLinkId } from "@/types/common";
import type { ComponentIdDefinition } from "@/types/demo";

const OnThisPage = () => {
  const { section, component } = useParams();
  const { hash } = useLocation();

  function isActiveLink(id: string) {
    return hash === `#${id}` || (!hash && id === "overview");
  }

  const info = {
    component: findComponent(component as ComponentIdDefinition),
    getStarted: findGetStartedLink(section as GetStartedLinkId),
  };

  return (
    <aside className="on-this-page-area">
      <div className="guide-box">
        <h3 className="title">On this page</h3>
        <div className="actions">
          {!component && (
            <div className="links">
              {info.getStarted.references && (
                <ul>
                  {info.getStarted.references.map((ref, i) => (
                    <li key={i}>
                      <a
                        mui-button={isActiveLink(ref.value) ? "filled" : "text"}
                        data-rounded="true"
                        data-size="sm"
                        href={`#${ref.value}`}>
                        {ref.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
          {component && (
            <div className="links">
              <h4 className="subtitle">Usage</h4>
              <ul>
                {info.component.content.slice(0, 2).map((item) => (
                  <li key={item.id}>
                    <a
                      mui-button={isActiveLink(item.id) ? "filled" : "text"}
                      data-rounded="true"
                      data-size="sm"
                      href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {component && (
            <div className="links">
              <h4 className="subtitle">Examples</h4>
              <ul>
                {info.component.content.slice(2).map((item) => (
                  <li key={item.id}>
                    <a
                      mui-button={isActiveLink(item.id) ? "filled" : "text"}
                      data-rounded="true"
                      data-size="sm"
                      href={`#${item.id}`}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default OnThisPage;
