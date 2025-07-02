import type { DemoDefinition } from "@/types/demo";
import SnackbarDemo from "./snackbar-demo";
import SnackbarClose from "./snackbar-close";
import SnackbarAction from "./snackbar-action";
import SnackbarPosition from "./snackbar-position";

const SNACKBAR_DEMO: DemoDefinition = {
  id: "snackbar",
  label: "Snackbar",
  description:
    "Snackbars show short updates about app processes at the bottom of the screen",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: SnackbarDemo,
      code: 'import { useState } from "react";\nimport Button from "@/components/ui/button";\nimport Snackbar from "@/components/ui/snackbar";\n \nconst SnackbarDemo = () => {\n    const [isOpen, setIsOpen] = useState<boolean>(false);\n \n    return (\n        <div className="demo">\n            <Button onClick={() => setIsOpen(true)}>Click to open</Button>\n            <Snackbar\n                open={isOpen}\n                onClose={() => setIsOpen(false)}\n                message="Email achieved"\n            />\n        </div>\n    );\n};\n \nexport default SnackbarDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport {\n    useEffect,\n    type ButtonHTMLAttributes,\n    type ComponentProps,\n} from "react";\nimport Icon from "@/components/misc/icon";\nimport Button from "@/components/ui/button";\nimport IconButton from "@/components/ui/icon-button";\n \ntype SnackbarProps = Omit<ComponentProps<"div">, "children"> & {\n    open: boolean;\n    message: string;\n    action?: {\n        label: string;\n    } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;\n    close?: boolean;\n    onClose?: () => void;\n    duration?: number;\n    position?:\n        | "top-start"\n        | "top-center"\n        | "top-end"\n        | "bottom-start"\n        | "bottom-center"\n        | "bottom-end";\n \n    line?: "single" | "multiple";\n};\n \nconst Snackbar = ({\n    open,\n    message,\n    action,\n    close = false,\n    duration = 5000,\n    onClose,\n    position = "bottom-start",\n    line = "single",\n    ...props\n}: SnackbarProps) => {\n    useEffect(() => {\n        if (!open || !onClose) return;\n \n        const timer = setTimeout(onClose, duration);\n \n        return () => clearTimeout(timer);\n    }, [open, onClose, duration]);\n \n    return (\n        <div\n            mui-snackbar={position}\n            data-line={line}\n            aria-live="polite"\n            inert={!open || undefined}\n            role={open ? "status" : undefined}\n            {...props}>\n            <p mui-snackbar-message="">{message}</p>\n            {(close || action) && (\n                <div mui-snackbar-events="">\n                    {action && (\n                        <Button mui-snackbar-action="" variant="text" {...action}>\n                            {action.label}\n                        </Button>\n                    )}\n                    {close && (\n                        <IconButton\n                            mui-snackbar-close=""\n                            aria-label="close"\n                            onClick={onClose}>\n                            <Icon name="close" />\n                        </IconButton>\n                    )}\n                </div>\n            )}\n        </div>\n    );\n};\n \nexport default Snackbar;',
        css: '[mui-snackbar] {\n    --snackbar-offset: var(--spacing-24);\n \n    z-index: 9999;\n    position: fixed;\n    color: var(--color-inverse-on-surface);\n    background-color: var(--color-inverse-surface);\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-4);\n    justify-content: space-between;\n    border-radius: var(--radius-xs);\n    padding-inline: var(--spacing-16) var(--spacing-8);\n    transition: var(--transition-standard-slow-effects);\n \n    &[inert] {\n        scale: 0.9;\n        opacity: 0;\n        visibility: hidden;\n    }\n \n    &[data-line="single"] {\n        height: 48px;\n        min-width: 350px;\n \n        [mui-snackbar-message] {\n            overflow: hidden;\n            white-space: nowrap;\n            text-overflow: ellipsis;\n        }\n    }\n \n    &[data-line="multiple"] {\n        width: 350px;\n        min-height: 48px;\n        align-items: end;\n        flex-direction: column;\n        gap: var(--spacing-10);\n        padding-block: var(--spacing-10);\n \n        [mui-snackbar-message] {\n            width: 100%;\n        }\n    }\n \n    &[mui-snackbar*="top"] {\n        inset-block-start: var(--snackbar-offset);\n    }\n \n    &[mui-snackbar*="bottom"] {\n        inset-block-end: var(--snackbar-offset);\n    }\n \n    &[mui-snackbar*="start"] {\n        inset-inline-start: var(--snackbar-offset);\n    }\n \n    &[mui-snackbar*="center"] {\n        left: 50%;\n        transform: translateX(-50%);\n    }\n \n    &[mui-snackbar*="end"] {\n        inset-inline-end: var(--snackbar-offset);\n    }\n \n    [mui-snackbar-message] {\n        flex: 2;\n        font: var(--font-body-md);\n    }\n \n    [mui-snackbar-events] {\n        display: flex;\n        gap: var(--spacing-4);\n \n        [mui-snackbar-action] {\n            color: var(--color-inverse-primary);\n        }\n \n        [mui-snackbar-close] {\n            color: inherit;\n        }\n    }\n \n    @media (max-width: 769px) {\n        &:not([mui-snackbar*="center"]) {\n            inset-inline-end: auto !important;\n            inset-inline-start: auto !important;\n        }\n    }\n}',
      },
    },
    {
      id: "close",
      label: "Close",
      preview: SnackbarClose,
      code: 'import { useState } from "react";\nimport Button from "@/components/ui/button";\nimport Snackbar from "@/components/ui/snackbar";\n \nconst SnackbarClose = () => {\n    const [isOpen, setIsOpen] = useState<boolean>(false);\n \n    return (\n        <div className="demo">\n            <Button onClick={() => setIsOpen(true)}>Click to open</Button>\n            <Snackbar\n                open={isOpen}\n                onClose={() => setIsOpen(false)}\n                message="Email achieved"\n                close\n            />\n        </div>\n    );\n};\n \nexport default SnackbarClose;',
    },
    {
      id: "action",
      label: "Action",
      preview: SnackbarAction,
      code: 'import { useState } from "react";\nimport Button from "@/components/ui/button";\nimport Snackbar from "@/components/ui/snackbar";\n \nconst SnackbarAction = () => {\n    const [isOpen, setIsOpen] = useState<boolean>(false);\n \n    return (\n        <div className="demo">\n            <Button onClick={() => setIsOpen(true)}>Click to open</Button>\n            <Snackbar\n                open={isOpen}\n                onClose={() => setIsOpen(false)}\n                message="Email achieved"\n                close\n                action={{ label: "Action", onClick: () => setIsOpen(false) }}\n            />\n        </div>\n    );\n};\n \nexport default SnackbarAction;',
    },
    {
      id: "position",
      label: "Position",
      preview: SnackbarPosition,
      code: 'import { useState } from "react";\nimport Button from "@/components/ui/button";\nimport Snackbar from "@/components/ui/snackbar";\n \ntype SnackbarPosition =\n    | "top-start"\n    | "top-center"\n    | "top-end"\n    | "bottom-start"\n    | "bottom-center"\n    | "bottom-end";\n \nconst SnackbarPosition = () => {\n    const [snackbar, setSnackbar] = useState<{\n        [key in SnackbarPosition]: boolean;\n    }>({\n        "top-start": false,\n        "top-center": false,\n        "top-end": false,\n        "bottom-start": false,\n        "bottom-center": false,\n        "bottom-end": false,\n    });\n \n    return (\n        <div className="demo wrap">\n            {Object.entries(snackbar).map(([position]) => (\n                <Button\n                    key={position}\n                    variant="outlined"\n                    onClick={() =>\n                        setSnackbar((prev) => ({ ...prev, [position]: true }))\n                    }>\n                    {position.replace("-", " ")}\n                </Button>\n            ))}\n            {Object.entries(snackbar).map(([position, state], i) => (\n                <Snackbar\n                    key={i}\n                    position={position as SnackbarPosition}\n                    open={state}\n                    close\n                    onClose={() =>\n                        setSnackbar((prev) => ({ ...prev, [position]: false }))\n                    }\n                    message="Snackbar supporting text"\n                />\n            ))}\n        </div>\n    );\n};\n \nexport default SnackbarPosition;',
    },
  ],
};

export default SNACKBAR_DEMO;
