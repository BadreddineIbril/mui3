import Copy from "@/components/misc/copy";
import SyntaxHighlighter from "@/components/misc/syntax-highlighter";
import CssIcon from "@/assets/icons/css";
import HtmlIcon from "@/assets/icons/html";
import TypescriptIcon from "@/assets/icons/typescript";

interface CodeBlockProps {
  label: string;
  code: string;
  lang?: "ts" | "css" | "html";
}

const CodeBlock = ({ label, code, lang = "ts" }: CodeBlockProps) => {
  const LANGS = {
    ts: <TypescriptIcon />,
    css: <CssIcon />,
    html: <HtmlIcon />,
  };

  return (
    <div mui-code-block="">
      <div mui-code-block-label="">
        {LANGS[lang]}
        <span>{label}</span>
      </div>
      <div mui-code-block-output="">
        <SyntaxHighlighter code={code} />
        <Copy content={code} />
      </div>
    </div>
  );
};

export default CodeBlock;
