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
      code: `
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
 
export function IconButtonDemo {
    return (
        <div className="demo">
            <IconButton>
                <Icon name="edit" />
            </IconButton>
        </div>
    );
};`,
    },
    {
      id: "installation",
      label: "Installation",
      code: {
        tsx: 'import "./style.css";\nimport { useNavigate } from "react-router-dom";\nimport type { ComponentProps, HTMLAttributeAnchorTarget } from "react";\n \ntype IconButtonProps = ComponentProps<"button"> & {\n    variant?: "standard" | "filled" | "tonal" | "outlined";\n    size?: "xs" | "sm" | "md" | "lg" | "xl";\n    width?: "default" | "narrow" | "wide";\n    href?: string;\n    target?: HTMLAttributeAnchorTarget;\n    flipIconInRtl?: boolean;\n};\n \nconst IconButton = ({\n    flipIconInRtl = false,\n    variant = "standard",\n    width = "default",\n    target = "_self",\n    size = "sm",\n    href,\n    ...props\n}: IconButtonProps) => {\n    const navigate = useNavigate();\n \n    return (\n        <button\n            mui-icon-button={variant}\n            data-width={width}\n            data-size={size}\n            data-flip-icon-in-rtl={flipIconInRtl || undefined}\n            {...props}\n            onClick={(e) => {\n                props.onClick?.(e);\n                if (!e.defaultPrevented && href) {\n                    if (target === "_blank") {\n                        open(href, target, "noopener,noreferrer");\n                    } else {\n                        navigate(href);\n                    }\n                }\n            }}\n        />\n    );\n};\n \nexport default IconButton;',
        css: `
[mui-icon-button] {
    cursor: pointer;
    position: relative;
    border: 1px solid transparent;
    outline-offset: 1px;
    outline: 10px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: var(--radius-rounded);
    transition: var(--transition-standard-fast-effects);
 
    &[mui-icon-button="standard"] {
        color: var(--color-on-surface-variant);
    }
 
    &[mui-icon-button="filled"] {
        color: var(--color-on-primary);
        background-color: var(--color-primary);
 
        &:hover {
            background-color: color-mix(
                in srgb,
                var(--color-primary) 92%,
                transparent
            );
        }
    }
 
    &[mui-icon-button="tonal"] {
        color: var(--color-on-secondary-container);
        background-color: var(--color-secondary-container);
 
        &:hover {
            background-color: color-mix(
                in srgb,
                currentColor 8%,
                var(--color-secondary-container)
            );
        }
    }
 
    &[mui-icon-button="outlined"] {
        color: var(--color-on-surface-variant);
        border-color: var(--color-outline-variant);
    }
 
    &[data-size="xs"] {
        height: 32px;
 
        & > [mui-icon] {
            font-size: 20px;
        }
 
        &[data-width="narrow"] {
            width: 28px;
        }
 
        &[data-width="default"] {
            width: 32px;
        }
 
        &[data-width="wide"] {
            width: 40px;
        }
    }
 
    &[data-size="sm"] {
        height: 40px;
 
        & > [mui-icon] {
            font-size: 24px;
        }
 
        &[data-width="narrow"] {
            width: 32px;
        }
 
        &[data-width="default"] {
            width: 40px;
        }
 
        &[data-width="wide"] {
            width: 52px;
        }
    }
 
    &[data-size="md"] {
        height: 56px;
 
        & > [mui-icon] {
            font-size: 24px;
        }
 
        &[data-width="narrow"] {
            width: 48px;
        }
 
        &[data-width="default"] {
            width: 56px;
        }
 
        &[data-width="wide"] {
            width: 72px;
        }
    }
 
    &[data-size="lg"] {
        height: 96px;
 
        & > [mui-icon] {
            font-size: 32px;
        }
 
        &[data-width="narrow"] {
            width: 64px;
        }
 
        &[data-width="default"] {
            width: 96px;
        }
 
        &[data-width="wide"] {
            width: 128px;
        }
    }
 
    &[data-size="xl"] {
        height: 136px;
 
        & > [mui-icon] {
            font-size: 40px;
        }
 
        &[data-width="narrow"] {
            width: 104px;
        }
 
        &[data-width="default"] {
            width: 136px;
        }
 
        &[data-width="wide"] {
            width: 184px;
        }
    }
 
    &::before {
        inset: 0;
        opacity: 0;
        position: absolute;
        border-radius: inherit;
        outline: 1px solid color-mix(in srgb, currentColor 12%, transparent);
        background-color: color-mix(in srgb, currentColor 12%, transparent);
    }
 
    &[mui-icon-button="standard"],
    &[mui-icon-button="outlined"] {
        &:hover {
            background-color: color-mix(in srgb, currentColor 8%, transparent);
        }
    }
 
    &[data-flip-icon-in-rtl] > [mui-icon]:dir(rtl) {
        rotate: 180deg;
    }
 
    &:active::before {
        content: "";
        animation: ripple var(--transition-standard-default-effects) forwards;
    }
 
    &:focus-visible {
        animation: focus var(--transition-standard-slow-spatial) forwards;
    }
 
    &:disabled {
        pointer-events: none;
        color: color-mix(in srgb, var(--color-on-surface) 38%, transparent);
        background-color: color-mix(
            in srgb,
            var(--color-on-surface) 10%,
            transparent
            );
    }
}`,
      },
    },
    {
      id: "variant",
      label: "Variant",
      preview: IconButtonVariant,
      code: `
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
 
export function IconButtonVariant {
    return (
        <div className="demo">
            <IconButton variant="filled">
                <Icon name="volume_up" />
            </IconButton>
            <IconButton variant="tonal">
                <Icon name="volume_up" />
            </IconButton>
            <IconButton variant="outlined">
                <Icon name="volume_up" />
            </IconButton>
            <IconButton variant="standard">
                <Icon name="volume_up" />
            </IconButton>
        </div>
    );
};`,
    },
    {
      id: "size",
      label: "Size",
      preview: IconButtonSize,
      code: `
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
 
export function IconButtonSize {
    return (
        <div className="demo">
            <IconButton size="xs" variant="tonal">
                <Icon name="play_arrow" />
            </IconButton>
            <IconButton size="sm" variant="tonal">
                <Icon name="play_arrow" />
            </IconButton>
            <IconButton size="md" variant="tonal">
                <Icon name="play_arrow" />
            </IconButton>
            <IconButton size="lg" variant="tonal">
                <Icon name="play_arrow" />
            </IconButton>
            <IconButton size="xl" variant="tonal">
                <Icon name="play_arrow" />
            </IconButton>
        </div>
    );
};`,
    },
    {
      id: "width",
      label: "Width",
      preview: IconButtonWidth,
      code: `
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
 
export function IconButtonWithIcon {
    return (
        <div className="demo">
            <IconButton width="narrow" variant="outlined">
                <Icon name="more_vert" />
            </IconButton>
            <IconButton width="default" variant="outlined">
                <Icon name="more_vert" />
            </IconButton>
            <IconButton width="wide" variant="outlined">
                <Icon name="more_vert" />
            </IconButton>
        </div>
    );
};`,
    },
    {
      id: "disabled",
      label: "Disabled",
      preview: IconButtonDisabled,
      code: `
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
 
export function IconButtonDisabled {
    return (
        <div className="demo">
            <IconButton disabled>
                <Icon name="volume_off" />
            </IconButton>
        </div>
    );
};`,
    },
    {
      id: "link",
      label: "Link",
      preview: IconButtonLink,
      code: `
import Icon from "@/components/misc/icon";
import IconButton from "@/components/ui/icon-button";
 
export default IconButtonLink {
    return (
        <div className="demo">
            <IconButton href="#" target="_blank" variant="tonal">
                <Icon name="home" />
            </IconButton>
        </div>
    );
};`,
    },
  ],
};

export default ICON_BUTTON_DEMO;
