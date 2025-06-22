import { useParams } from "react-router-dom";
import { findGetStartedLink } from "@/util/helpers";
import type { GetStartedLinkId } from "@/types/common";

const GetStartedPlayground = () => {
  const { section } = useParams();

  const { label } = findGetStartedLink(section as GetStartedLinkId);

  return (
    <>
      <div className="playground-box">
        <div className="heading">
          <h2 className="title">{label}</h2>
        </div>
      </div>
    </>
  );
};

export default GetStartedPlayground;
