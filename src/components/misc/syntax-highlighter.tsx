import type { ReactNode } from "react";

interface SyntaxHighlighterProps {
  code: string;
}

const SyntaxHighlighter = ({ code }: SyntaxHighlighterProps) => {
  const patterns: [RegExp, string][] = [
    [/\b(import|from|export|function|const|let|return|default|type|pnpm|npm|bun|yarn)\b/g, "keyword"],
    [/(['"`])(?:\\.|[^\\])*?\1/g, "string"],
    [/<\/\w+>/g, "tag"],
    [/<\w+/, "tag"],
    [/\/?>/, "tag"],
    [/\[[^\]]*\]/g, "tag"],
    [/[{}]/g, "string"],
    [/&/g, "string"],
    [/\b[\w-]+(?=\s*:)/g, "tag"],
  ];

  function highlight(text: string) {
    const result: ReactNode[] = [];
    let cursor = 0;

    while (cursor < text.length) {
      let matched = false;

      for (const [regex, name] of patterns) {
        regex.lastIndex = cursor;
        const match = regex.exec(text);

        if (match && match.index === cursor) {
          result.push(
            <span key={cursor} className={name}>
              {match[0]}
            </span>
          );
          cursor += match[0].length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        result.push(text[cursor]);
        cursor++;
      }
    }

    return result;
  }

  return (
    <pre>
      {code.split("\n").map((line, i) => (
        <div data-line={i+1} key={i}>
          {highlight(line)}
        </div>
      ))}
    </pre>
  );
};

export default SyntaxHighlighter;
