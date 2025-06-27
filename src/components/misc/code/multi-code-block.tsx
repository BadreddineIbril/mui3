import Copy from "@/components/misc/copy";
import SyntaxHighlighter from "@/components/misc/syntax-highlighter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MultiCodeBlock {
  options: { id: string; label: string; code: string }[];
}

const MultiCodeBlock = ({ options }: MultiCodeBlock) => {
  return (
    <div mui-code-block="">
      <Tabs defaultTab={options[0].id}>
        <TabsList mui-code-block-selector="">
          {options.map((opt) => (
            <TabsTrigger key={opt.id} value={opt.id}>
              {opt.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {options.map((opt) => (
          <TabsContent mui-code-block-output="" key={opt.id} value={opt.id}>
            <div mui-code-block-item="">
              <SyntaxHighlighter code={opt.code} />
            </div>
            <Copy content={opt.code} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default MultiCodeBlock;
