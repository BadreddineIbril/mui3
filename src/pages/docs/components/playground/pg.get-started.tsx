import { useParams } from "react-router-dom";
import { findGetStartedLink } from "@/util/helpers";
import type { GetStartedLinkId } from "@/types/common";
import InvokeComponent from "@/components/misc/invoke-component";

const GetStartedPlayground = () => {
  const { section } = useParams();

  const { content } = findGetStartedLink(section as GetStartedLinkId);

  return (
    <>
      <div className="playground-box">{InvokeComponent(content)}</div>
    </>
  );
};

export default GetStartedPlayground;
