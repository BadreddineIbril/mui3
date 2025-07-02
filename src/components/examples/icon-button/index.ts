import type { DemoDefinition } from "@/types/demo";
import IconButtonDemo from "./icon-button-demo";
import IconButtonDisabled from "./icon-button-disabled";
import IconButtonLink from "./icon-button-link";
import IconButtonVariant from "./icon-button-variant";
import IconButtonSize from "./icon-button-size";
import IconButtonWidth from "./icon-button-width";

const ICON_BUTTON_DEMO: DemoDefinition = {
  id: "icon-button",
  label: "Icon Button",
  description: "Icon buttons help people take minor actions with one tap",
  content: [
    {
      id: "overview",
      label: "Overview",
      preview: IconButtonDemo,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\n \nconst IconButtonDemo = () => {\n    return (\n        <div className="demo">\n            <IconButton>\n                <Icon name="edit" />\n            </IconButton>\n        </div>\n    );\n};\n \nexport default IconButtonDemo;',
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport { useNavigate } from "react-router-dom";\nimport type { ComponentProps, HTMLAttributeAnchorTarget } from "react";\n \ntype IconButtonProps = ComponentProps<"button"> & {\n    variant?: "standard" | "filled" | "tonal" | "outlined";\n    size?: "xs" | "sm" | "md" | "lg" | "xl";\n    width?: "default" | "narrow" | "wide";\n    href?: string;\n    target?: HTMLAttributeAnchorTarget;\n    flipIconInRtl?: boolean;\n};\n \nconst IconButton = ({\n    flipIconInRtl = false,\n    variant = "standard",\n    width = "default",\n    target = "_self",\n    size = "sm",\n    href,\n    ...props\n}: IconButtonProps) => {\n    const navigate = useNavigate();\n \n    return (\n        <button\n            mui-icon-button={variant}\n            data-width={width}\n            data-size={size}\n            data-flip-icon-in-rtl={flipIconInRtl || undefined}\n            {...props}\n            onClick={(e) => {\n                props.onClick?.(e);\n                if (!e.defaultPrevented && href) {\n                    if (target === "_blank") {\n                        open(href, target, "noopener,noreferrer");\n                    } else {\n                        navigate(href);\n                    }\n                }\n            }}\n        />\n    );\n};\n \nexport default IconButton;',
        css: '[mui-icon-button] {\n    cursor: pointer;\n    position: relative;\n    border: 1px solid transparent;\n    outline-offset: 1px;\n    outline: 10px solid transparent;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    background-repeat: no-repeat;\n    background-size: 250%;\n    background-position: center;\n    border-radius: var(--radius-rounded);\n    transition: var(--transition-standard-fast-effects);\n \n    &[mui-icon-button="standard"] {\n        color: var(--color-on-surface-variant);\n    }\n \n    &[mui-icon-button="filled"] {\n        color: var(--color-on-primary);\n        background-color: var(--color-primary);\n \n        &:hover {\n            background-color: color-mix(\n                in srgb,\n                var(--color-primary) 92%,\n                transparent\n            );\n        }\n    }\n \n    &[mui-icon-button="tonal"] {\n        color: var(--color-on-secondary-container);\n        background-color: var(--color-secondary-container);\n \n        &:hover {\n            background-color: color-mix(\n                in srgb,\n                currentColor 8%,\n                var(--color-secondary-container)\n            );\n        }\n    }\n \n    &[mui-icon-button="outlined"] {\n        color: var(--color-on-surface-variant);\n        border-color: var(--color-outline-variant);\n    }\n \n    &[data-size="xs"] {\n        height: 32px;\n \n        & > [mui-icon] {\n            font-size: 20px;\n        }\n \n        &[data-width="narrow"] {\n            width: 28px;\n        }\n \n        &[data-width="default"] {\n            width: 32px;\n        }\n \n        &[data-width="wide"] {\n            width: 40px;\n        }\n    }\n \n    &[data-size="sm"] {\n        height: 40px;\n \n        & > [mui-icon] {\n            font-size: 24px;\n        }\n \n        &[data-width="narrow"] {\n            width: 32px;\n        }\n \n        &[data-width="default"] {\n            width: 40px;\n        }\n \n        &[data-width="wide"] {\n            width: 52px;\n        }\n    }\n \n    &[data-size="md"] {\n        height: 56px;\n \n        & > [mui-icon] {\n            font-size: 24px;\n        }\n \n        &[data-width="narrow"] {\n            width: 48px;\n        }\n \n        &[data-width="default"] {\n            width: 56px;\n        }\n \n        &[data-width="wide"] {\n            width: 72px;\n        }\n    }\n \n    &[data-size="lg"] {\n        height: 96px;\n \n        & > [mui-icon] {\n            font-size: 32px;\n        }\n \n        &[data-width="narrow"] {\n            width: 64px;\n        }\n \n        &[data-width="default"] {\n            width: 96px;\n        }\n \n        &[data-width="wide"] {\n            width: 128px;\n        }\n    }\n \n    &[data-size="xl"] {\n        height: 136px;\n \n        & > [mui-icon] {\n            font-size: 40px;\n        }\n \n        &[data-width="narrow"] {\n            width: 104px;\n        }\n \n        &[data-width="default"] {\n            width: 136px;\n        }\n \n        &[data-width="wide"] {\n            width: 184px;\n        }\n    }\n \n    &[mui-icon-button="standard"],\n    &[mui-icon-button="outlined"] {\n        &:hover {\n            background-color: color-mix(in srgb, currentColor 8%, transparent);\n        }\n    }\n \n    &[data-flip-icon-in-rtl] > [mui-icon]:dir(rtl) {\n        rotate: 180deg;\n    }\n \n    &:active {\n        background-image: var(--ripple-full);\n    }\n \n    &:focus-visible {\n        animation: focus var(--transition-standard-slow-spatial) forwards;\n    }\n \n    &:disabled {\n        pointer-events: none;\n        color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);\n        background-color: color-mix(\n            in srgb,\n            var(--color-on-surface) 10%,\n            transparent\n        );\n    }\n}',
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: IconButtonVariant,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\n \nconst IconButtonVariant = () => {\n    return (\n        <div className="demo">\n            <IconButton variant="filled">\n                <Icon name="volume_up" />\n            </IconButton>\n            <IconButton variant="tonal">\n                <Icon name="volume_up" />\n            </IconButton>\n            <IconButton variant="outlined">\n                <Icon name="volume_up" />\n            </IconButton>\n            <IconButton variant="standard">\n                <Icon name="volume_up" />\n            </IconButton>\n        </div>\n    );\n};\n \nexport default IconButtonVariant;',
    },
    {
      id: "size",
      label: "Size",
      preview: IconButtonSize,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\n \nconst IconButtonSize = () => {\n    return (\n        <div className="demo wrap">\n            <IconButton size="xs" variant="tonal">\n                <Icon name="play_arrow" />\n            </IconButton>\n            <IconButton size="sm" variant="tonal">\n                <Icon name="play_arrow" />\n            </IconButton>\n            <IconButton size="md" variant="tonal">\n                <Icon name="play_arrow" />\n            </IconButton>\n            <IconButton size="lg" variant="tonal">\n                <Icon name="play_arrow" />\n            </IconButton>\n            <IconButton size="xl" variant="tonal">\n                <Icon name="play_arrow" />\n            </IconButton>\n        </div>\n    );\n};\n \nexport default IconButtonSize;',
    },
    {
      id: "width",
      label: "Width",
      preview: IconButtonWidth,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\n \nconst IconButtonWidth = () => {\n    return (\n        <div className="demo">\n            <IconButton width="narrow" variant="outlined">\n                <Icon name="more_vert" />\n            </IconButton>\n            <IconButton width="default" variant="outlined">\n                <Icon name="more_vert" />\n            </IconButton>\n            <IconButton width="wide" variant="outlined">\n                <Icon name="more_vert" />\n            </IconButton>\n        </div>\n    );\n};\n \nexport default IconButtonWidth;',
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: IconButtonDisabled,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\n \nconst IconButtonDisabled = () => {\n    return (\n        <div className="demo">\n            <IconButton disabled>\n                <Icon name="volume_off" />\n            </IconButton>\n        </div>\n    );\n};\n \nexport default IconButtonDisabled;',
    },
    {
      id: "link",
      label: "Link",
      preview: IconButtonLink,
      code: 'import Icon from "@/components/misc/icon";\nimport IconButton from "@/components/ui/icon-button";\n \nconst IconButtonLink = () => {\n    return (\n        <div className="demo">\n            <IconButton href="#" target="_blank" variant="tonal">\n                <Icon name="home" />\n            </IconButton>\n        </div>\n    );\n};\n \nexport default IconButtonLink;',
    },
  ],
};

export default ICON_BUTTON_DEMO;
