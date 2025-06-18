import Icon from "@/components/misc/icon";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { ButtonGroup, ButtonGroupItem } from "@/components/ui/button-group";
import { Card, CardActionArea } from "@/components/ui/card";
import Checkbox from "@/components/ui/checkbox";
import { Chips, ChipItem } from "@/components/ui/chips";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogHeadline,
  DialogSupporting,
  DialogTrigger,
} from "@/components/ui/dialog";
import Divider from "@/components/ui/divider";
import Fab from "@/components/ui/fab";
import IconButton from "@/components/ui/icon-button";
import {
  List,
  ListDivider,
  ListItem,
  ListItemLeading,
  ListItemTrailing,
} from "@/components/ui/list";
import { Bar, BarItem } from "@/components/ui/navigation/bar";
import {
  Rail,
  RailBody,
  RailFab,
  RailHeader,
  RailItem,
  RailMenu,
} from "@/components/ui/navigation/rail";
import Radio from "@/components/ui/radio";
import { Select, SelectOption } from "@/components/ui/select";
import {
  SideSheet,
  SideSheetBody,
  SideSheetClose,
  SideSheetContent,
  SideSheetFooter,
  SideSheetHeader,
  SideSheetTrigger,
} from "@/components/ui/side-sheet";
import Slider from "@/components/ui/slider";
import Snackbar from "@/components/ui/snackbar";
import { SplitButton, SplitButtonItem } from "@/components/ui/split-button";
import Switch from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextField from "@/components/ui/text-field";
import Toolbar from "@/components/ui/toolbar";
import {
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipFooter,
  TooltipSubhead,
  TooltipSupporting,
} from "@/components/ui/tooltip";
import { useRef, useState } from "react";

const Home = () => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState<boolean>(false);
  const [removed, setRemoved] = useState<boolean>(false);

  const [amenities, setAmenities] = useState<
    { label: string; icon?: string; isSelected: boolean }[]
  >([
    { label: "Washer / Dryer", isSelected: false },
    { label: "Ramp access", isSelected: false },
    { label: "Garden", isSelected: false },
    { label: "Cats OK", icon: "pets", isSelected: false },
    { label: "Dogs OK", icon: "pets", isSelected: false },
    { label: "Smoke-free", isSelected: false },
  ]);

  const [fruits, setFruits] = useState<
    { label: string; icon?: string; isSelected: boolean }[]
  >([
    { label: "Banana", isSelected: true },
    { label: "Orange", icon: "nutrition", isSelected: false },
    { label: "Strawberry", isSelected: false },
    { label: "Kiwi", isSelected: false },
    { label: "Apple", isSelected: false },
    { label: "Watermelon", isSelected: false },
  ]);

  const [bar, setBar] = useState<number>(0);
  const [snackbar, setSnackbar] = useState<boolean>(false);

  return (
    <main
      data-page="home"
      style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <section style={{ display: "grid", gap: "10px", width: "300px" }}>
        <Select disabled>
          <SelectOption value="banana">Banana</SelectOption>
          <SelectOption value="kiwi">Kiwi</SelectOption>
          <SelectOption value="orange">Orange</SelectOption>
        </Select>
        <Select placeholder="Select a fruit..">
          <SelectOption value="banana">Banana</SelectOption>
          <SelectOption value="kiwi">Kiwi</SelectOption>
          <SelectOption value="orange" disabled>
            Orange
          </SelectOption>
        </Select>
      </section>

      <section style={{ display: "flex", gap: "10px" }}>
        <Button variant="outlined" onClick={() => setSnackbar(true)}>
          Open Snackbar
        </Button>

        <Snackbar
          open={snackbar}
          close
          onClose={() => setSnackbar(false)}
          message="Snackbar supporting text"
        />
      </section>

      <section style={{ display: "flex", gap: "10px" }}>
        {["standard", "modal"].map((type, i) => (
          <SideSheet variant={type} key={i}>
            <SideSheetTrigger>
              <Button variant="outlined">Open Sheet ({type})</Button>
            </SideSheetTrigger>
            <SideSheetContent>
              <SideSheetHeader
                headline="Title"
                back={i === 0}
                close={i !== 0}
              />
              <SideSheetBody>Hola Mola</SideSheetBody>
              <SideSheetFooter
                style={{ display: "flex", gap: "12px" }}
                showDivider>
                <Button>Save</Button>
                <SideSheetClose>
                  <Button variant="outlined">Cancel</Button>
                </SideSheetClose>
              </SideSheetFooter>
            </SideSheetContent>
          </SideSheet>
        ))}
      </section>

      <section style={{ display: "grid", gap: "10px" }}>
        <Card style={{ padding: "2em" }}>Elevated</Card>
        <Card variant="filled" style={{ padding: "2em" }}>
          Filled
        </Card>
        <Card variant="outlined" style={{ padding: "2em" }}>
          Outlined
        </Card>
        <Card>
          <CardActionArea>Interactive</CardActionArea>
        </Card>
        <Card variant="filled">
          <CardActionArea>Interactive</CardActionArea>
        </Card>
        <Card variant="outlined">
          <CardActionArea>Interactive</CardActionArea>
        </Card>
        <Card>
          <CardActionArea disabled>Interactive</CardActionArea>
        </Card>
        <Card variant="filled">
          <CardActionArea disabled>Interactive</CardActionArea>
        </Card>
        <Card variant="outlined">
          <CardActionArea disabled>Interactive</CardActionArea>
        </Card>
      </section>

      <section style={{ display: "flex", gap: "10px" }}>
        <Rail style={{ height: "800px" }}>
          <RailHeader>
            <RailMenu>
              <Icon name="menu" />
            </RailMenu>
            <RailFab>
              <Icon name="edit" />
            </RailFab>
          </RailHeader>
          <RailBody alignment="bottom">
            <RailItem icon="star" label="Label" selected />
            <RailItem icon="star" label="Label" />
            <RailItem icon="star" label="Label" />
          </RailBody>
        </Rail>
        <Rail style={{ height: "800px" }}>
          <RailHeader>
            <RailMenu>
              <Icon name="menu" />
            </RailMenu>
            <RailFab>
              <Icon name="edit" />
            </RailFab>
          </RailHeader>
          <RailBody>
            <RailItem icon="star" selected />
            <RailItem icon="star" />
            <RailItem icon="star" />
          </RailBody>
        </Rail>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Bar style={{ width: "300px" }}>
          {[...Array(3)].map((_, i) => (
            <BarItem
              key={i}
              icon="play_circle"
              label="Label"
              selected={i === bar}
              onClick={() => setBar(i)}
            />
          ))}
        </Bar>
        <Bar style={{ width: "500px" }} orientation="vertical">
          <BarItem icon="play_circle" label="Label" selected />
          <BarItem icon="play_circle" label="Label" />
          <BarItem icon="play_circle" label="Label" />
        </Bar>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Dialog>
          <DialogTrigger>
            <Button variant="outlined">Open</Button>
          </DialogTrigger>
          <DialogContent style={{ width: "300px" }}>
            <DialogHeader showDivider>
              <DialogHeadline>Dialog title</DialogHeadline>
              <DialogSupporting>
                This is a standard alert dialog. Alert dialogs interrupt users
                with urgent information, details, or actions.
              </DialogSupporting>
            </DialogHeader>
            <DialogBody style={{ display: "flex", gap: "10px" }}>
              <DialogClose>
                <Button variant="text">Cancel</Button>
              </DialogClose>
              <Button variant="text">Done</Button>
            </DialogBody>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Button variant="outlined">Open (with icon)</Button>
          </DialogTrigger>
          <DialogContent style={{ width: "500px" }}>
            <DialogHeader icon="star">
              <DialogHeadline>Dialog title</DialogHeadline>
              <DialogSupporting>
                This is a standard alert dialog. Alert dialogs interrupt users
                with urgent information, details, or actions.
              </DialogSupporting>
            </DialogHeader>
            <DialogBody style={{ display: "flex", gap: "10px" }}>
              <DialogClose>
                <Button variant="text">Cancel</Button>
              </DialogClose>
              <Button variant="text">Done</Button>
            </DialogBody>
          </DialogContent>
        </Dialog>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
          minWidth: "400px",
        }}>
        {["standard", "vibrant"].map((type, i) => (
          <Toolbar key={i} type={type}>
            <IconButton>
              <Icon name="arrow_back" />
            </IconButton>
            <IconButton>
              <Icon name="arrow_forward" />
            </IconButton>
            <IconButton variant="filled">
              <Icon name="add" />
            </IconButton>
            <IconButton>
              <Icon name="settings" />
            </IconButton>
            <IconButton>
              <Icon name="more_vert" />
            </IconButton>
          </Toolbar>
        ))}

        {["standard", "vibrant"].map((type, i) => (
          <Toolbar key={i} variant="floating" type={type}>
            <IconButton>
              <Icon name="videocam_off" />
            </IconButton>
            <IconButton>
              <Icon name="mic" />
            </IconButton>
            <IconButton>
              <Icon name="front_hand" />
            </IconButton>
            <IconButton>
              <Icon name="more_vert" />
            </IconButton>
          </Toolbar>
        ))}

        {["horizontal", "vertical"].map((orientation, i) => (
          <Toolbar
            key={i}
            orientation={orientation}
            variant={i === 0 ? "docked" : "floating"}>
            <IconButton>
              <Icon name="archive" />
            </IconButton>
            <IconButton>
              <Icon name="delete" />
            </IconButton>
            <IconButton>
              <Icon name="mail" />
            </IconButton>
            <IconButton>
              <Icon name="alarm" />
            </IconButton>
            <IconButton>
              <Icon name="star" />
            </IconButton>
          </Toolbar>
        ))}

        <Toolbar>
          <Button variant="text">Back</Button>
          <Button>Next</Button>
        </Toolbar>

        <Toolbar alignment="center">
          <SplitButton>
            <SplitButtonItem>
              <Icon name="videocam" />
              Yes
            </SplitButtonItem>
            <SplitButtonItem>
              <Icon name="keyboard_arrow_down" />
            </SplitButtonItem>
          </SplitButton>
          <Button variant="outlined">Next</Button>
          <Button variant="outlined">Maybe</Button>
          <Tooltip>
            <IconButton variant="outlined">
              <Icon name="keyboard_arrow_down" />
            </IconButton>
            <TooltipContent>Open menu</TooltipContent>
          </Tooltip>
        </Toolbar>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Badge size="lg" label="999+">
          <Icon name="favorite" />
        </Badge>
        <IconButton width="wide">
          <Badge style={{ display: "flex", alignItems: "center" }}>
            <Icon name="favorite" />
          </Badge>
        </IconButton>
        <IconButton width="wide">
          <Badge
            size="lg"
            label="1+"
            style={{ display: "flex", alignItems: "center" }}>
            <Icon name="favorite" />
          </Badge>
        </IconButton>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <SplitButton>
          <SplitButtonItem>
            <Icon name="star" />
            Label
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
        <SplitButton size="sm" variant="outlined">
          <SplitButtonItem>
            <Icon name="star" />
            Label
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
        <SplitButton size="md">
          <SplitButtonItem>
            <Icon name="star" />
            Label
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
        <SplitButton size="lg">
          <SplitButtonItem>
            <Icon name="star" />
            Label
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
        <SplitButton size="xl">
          <SplitButtonItem>
            <Icon name="star" />
            Label
          </SplitButtonItem>
          <SplitButtonItem>
            <Icon name="keyboard_arrow_down" />
          </SplitButtonItem>
        </SplitButton>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Fab disabled>
          <Icon name="star" />
        </Fab>
        <Fab variant="soft-secondary">
          <Icon name="star" />
        </Fab>
        <Fab variant="soft-tertiary">
          <Icon name="star" />
        </Fab>
        <Fab variant="primary">
          <Icon name="star" /> Button
        </Fab>
        <Fab variant="secondary">
          <Icon name="star" /> Button
        </Fab>
        <Fab variant="tertiary">
          <Icon name="star" /> Button
        </Fab>
        <Fab variant="primary">Button</Fab>
        <Fab variant="secondary">Button</Fab>
        <Fab variant="tertiary">Button</Fab>
        <Fab variant="soft-primary">Button</Fab>
        <Fab variant="soft-secondary">Button</Fab>
        <Fab variant="soft-tertiary">Button</Fab>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "50px",
          flexDirection: "column",
        }}>
        <Slider orientation="vertical" labeled LabelFormatter="%" size="xl" />
        <Slider min={50} max={500} step={50} labeled />
        <Slider
          style={{ width: "300px" }}
          labeled
          LabelFormatter="%"
          size="md"
        />
        <Slider style={{ width: "300px" }} disabled defaultValue={40} />
        <Slider style={{ width: "300px" }} defaultValue={10} size="sm" />
        <Slider style={{ width: "300px" }} defaultValue={20} size="md" />
        <Slider style={{ width: "300px" }} defaultValue={30} size="lg" />
        <Slider style={{ width: "300px" }} defaultValue={40} size="xl" />
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <ButtonGroup variant="outlined" width="narrow" size="sm" asIcon>
          <ButtonGroupItem>
            <Icon name="bluetooth" />
          </ButtonGroupItem>
          <ButtonGroupItem width="default">
            <Icon name="alarm" />
          </ButtonGroupItem>
          <ButtonGroupItem>
            <Icon name="link_off" />
          </ButtonGroupItem>
          <ButtonGroupItem width="wide" disabled>
            <Icon name="wifi" />
          </ButtonGroupItem>
        </ButtonGroup>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Tooltip>
          <Button>Hover on me</Button>
          <TooltipContent>Plain tooltip</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button variant="outlined">Hover on me</Button>
          <TooltipContent>
            <TooltipSubhead>Rich tooltip</TooltipSubhead>
            <TooltipSupporting>
              Rich tooltips bring attention to a particular element of feature
              that warrants the user's focus.
            </TooltipSupporting>
            <TooltipFooter>
              <TooltipAction>Action</TooltipAction>
            </TooltipFooter>
          </TooltipContent>
        </Tooltip>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <List style={{ width: "350px" }}>
          <ListItem>
            <ListItemLeading
              type="video"
              value="https://videos.pexels.com/video-files/5644ƒ8/5644ƒ8-uhd_1440_2732_25fps.mp4"
            />
            New products
          </ListItem>
          <ListItem onClick={() => console.log("hover")}>Fruits</ListItem>
          <ListDivider />
          <ListItem disabled>Apple</ListItem>
          <ListItem supportingText="Wiwi" trailingSupportingText="+100">
            <ListItemLeading type="switch" value="none" />
            Banana
          </ListItem>
          <ListItem>
            Banana
            <ListItemTrailing type="checkbox" value="none" />
          </ListItem>
          <ListItem supportingText="WOWO">
            <ListItemLeading type="checkbox" value="none" />
            Banana
          </ListItem>
          <ListItem supportingText="WOWO" disabled>
            <ListItemLeading type="checkbox" value="none" />
            Banana <ListItemTrailing type="icon" value="favorite" />
          </ListItem>
          <ListItem>
            <ListItemLeading type="monogram" value="O" /> Orange
          </ListItem>
          <ListItem>
            <ListItemLeading type="checkbox" value="favorite" /> Favorite
          </ListItem>
          <ListItem>
            <ListItemLeading
              type="image"
              value="https://www.realsimple.com/thmb/R7Kl1qBAa2LAT05n9ZVC2CyP5jQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-eat-kiwi-GettyImages-2147529648-0ƒb80b6e2ef4d7181914c48bf536550.jpg"
            />
            Kiwi
          </ListItem>
          <ListItem
            disabled
            overline="Overline"
            supportingText="Cucumbers are long green fruits that are just as long as this multi-line description">
            Cucumber
            <ListItemTrailing type="icon" value="open_in_new" />
          </ListItem>
          <ListItem supportingText="This will link you out in a new tab">
            Shop for Kiwis
            <ListItemTrailing type="icon" value="open_in_new" />
          </ListItem>
        </List>
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Divider />
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <TextField
          label="Label"
          variant="filled"
          prefix="Com"
          suffix="Suf"
          placeholder="Type your name.."
          style={{ width: "300px" }}
        />
        <TextField
          label="Label"
          type="number"
          noSpinner
          style={{ width: "300px" }}
        />
        <TextField
          label="Label"
          type="text"
          disabled
          value="ddd"
          prefix="Com"
          suffix="Com"
          style={{ width: "300px" }}
        />
        <TextField
          label="Label"
          type="text"
          disabled
          value="ddd"
          placeholder="Placeholder"
          style={{ width: "300px" }}
        />
        <TextField
          label="Label"
          type="text"
          required
          placeholder="Placeholder"
          style={{ width: "300px" }}
        />
        <TextField
          label="Label"
          type="text"
          error
          errorText="Please fill out this field."
          placeholder="Placeholder"
          style={{ width: "300px" }}
        />
        <TextField label="Label" icon="search" style={{ width: "300px" }} />
        <TextField
          label="Label"
          prefix="Com"
          suffix="Suff"
          style={{ width: "300px" }}
        />
        <TextField
          label="Label"
          type="text"
          supporting="Please fill out this field."
          style={{ width: "300px" }}
        />
      </section>

      <section
        style={{
          display: "flex",
          flex: 2,
          gap: "10px",
          flexDirection: "column",
        }}>
        <Tabs defaultTab="keyboard" variant="primary">
          <TabsList>
            <TabsTrigger value="keyboard">
              <Icon name="keyboard" /> Keyboard
            </TabsTrigger>
            <TabsTrigger value="guitar">
              <Icon name="tune" /> Guitar
            </TabsTrigger>
            <TabsTrigger value="drums">
              <Icon name="cadence" /> Drums
            </TabsTrigger>
            <TabsTrigger value="piano">
              <Icon name="piano" /> Piano
            </TabsTrigger>
            <TabsTrigger value="saxophone">
              <Icon name="nightlife" /> Saxophone
            </TabsTrigger>
          </TabsList>
          <TabsContent value="keyboard">Keyboard</TabsContent>
        </Tabs>
        <Tabs defaultTab="saxophone">
          <TabsList>
            <TabsTrigger value="keyboard">
              <Icon name="keyboard" />
            </TabsTrigger>
            <TabsTrigger value="saxophone">
              <Icon name="nightlife" />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="keyboard">Keyboard</TabsContent>
        </Tabs>
        <Tabs defaultTab="keyboard" variant="secondary">
          <TabsList>
            <TabsTrigger value="keyboard">Keyboard</TabsTrigger>
            <TabsTrigger value="guitar">Guitar</TabsTrigger>
            <TabsTrigger value="drums">Drums</TabsTrigger>
            <TabsTrigger value="bass">Bass</TabsTrigger>
            <TabsTrigger value="saxophone">Saxophone</TabsTrigger>
          </TabsList>
          <TabsContent value="keyboard">Keyboard</TabsContent>
        </Tabs>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Switch />
        <Switch defaultChecked />
        <Switch icons />
        <Switch defaultChecked showOnlySelectedIcon />
        <Switch disabled />
        <Switch defaultChecked disabled />
        <Switch disabled icons />
        <Switch defaultChecked disabled icons />
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Chips variant="outlined" layout="scroll">
          {amenities.map((item, index) => (
            <ChipItem
              key={index}
              variant="filter"
              selected={item.isSelected}
              onSelect={() =>
                setAmenities((prev) =>
                  prev.map((i, idx) =>
                    idx === index ? { ...i, isSelected: !item.isSelected } : i
                  )
                )
              }>
              {item.icon && <Icon name={item.icon} />}
              {item.label}
            </ChipItem>
          ))}
        </Chips>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Chips variant="elevated">
          {fruits.map((item, index) => (
            <ChipItem
              key={index}
              variant="filter"
              selected={item.isSelected}
              onSelect={() =>
                setFruits((prev) =>
                  prev.map((i, idx) =>
                    idx === index ? { ...i, isSelected: !item.isSelected } : i
                  )
                )
              }>
              {item.icon && <Icon name={item.icon} />}
              {item.label}
            </ChipItem>
          ))}
        </Chips>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Chips>
          <ChipItem
            variant="filter"
            selected={selected}
            onSelect={() => setSelected(!selected)}>
            Option 1
          </ChipItem>
          <ChipItem
            variant="filter"
            selected={selected}
            onSelect={() => setSelected(!selected)}>
            Option 2 <Icon name="shopping_cart" />
          </ChipItem>
          {!removed && (
            <ChipItem
              variant="input"
              removable
              onRemove={() => setRemoved(true)}>
              Option 3
            </ChipItem>
          )}
          <ChipItem disabled>Option 4</ChipItem>
        </Chips>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox name="fruita" value="tomato" disabled />
          Tomato
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox name="fruita" value="potato" disabled />
          Potato
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox name="fruita" value="orange" ref={checkbox} />
          Orange
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox name="fruita" value="banana" required />
          Banana
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Checkbox name="fruita" value="kiwi" />
          Kiwi
        </label>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Radio name="fruit" value="tomato" disabled />
          Tomato
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Radio name="fruit" value="potato" disabled />
          Potato
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Radio name="fruit" value="orange" defaultChecked />
          Orange
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Radio name="fruit" value="banana" />
          Banana
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Radio name="fruit" value="kiwi" />
          Kiwi
        </label>
      </section>
      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <IconButton size="xs" variant="tonal" disabled>
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="xs" variant="tonal">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="sm" variant="tonal">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="md" variant="tonal">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="lg" variant="tonal">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="xl" variant="tonal">
          <Icon name="favorite" />
        </IconButton>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <IconButton size="xs" variant="tonal" width="narrow" disabled>
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="xs" variant="tonal" width="narrow" flipIconInRtl>
          <Icon name="arrow_back" />
        </IconButton>
        <IconButton size="sm" variant="tonal" width="narrow">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="md" variant="tonal" width="narrow">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="lg" variant="tonal" width="narrow">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="xl" variant="tonal" width="narrow">
          <Icon name="favorite" />
        </IconButton>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <IconButton size="xs" variant="tonal" width="wide" disabled>
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="xs" variant="tonal" width="wide">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="sm" variant="tonal" width="wide">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="md" variant="tonal" width="wide">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="lg" variant="tonal" width="wide">
          <Icon name="favorite" />
        </IconButton>
        <IconButton size="xl" variant="tonal" width="wide">
          <Icon name="favorite" />
        </IconButton>
      </section>

      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Button variant="filled" size="xs" disabled>
          Filled
        </Button>
        <Button variant="filled" size="xs">
          Filled
        </Button>
        <Button variant="filled" size="sm">
          Filled
        </Button>
        <Button variant="filled" size="md">
          Filled
        </Button>
        <Button variant="filled" size="lg">
          Filled
        </Button>
        <Button variant="filled" size="xl">
          Filled
        </Button>
      </section>
      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Button variant="elevated" size="xs" disabled>
          Elevated
        </Button>
        <Button variant="elevated" size="xs">
          Elevated
        </Button>
        <Button variant="elevated" size="sm">
          Elevated
        </Button>
        <Button variant="elevated" size="md">
          Elevated
        </Button>
        <Button variant="elevated" size="lg">
          Elevated
        </Button>
        <Button variant="elevated" size="xl">
          Elevated
        </Button>
      </section>
      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Button variant="tonal" size="xs" disabled>
          Tonal
        </Button>
        <Button variant="tonal" size="xs">
          Tonal
        </Button>
        <Button variant="tonal" size="sm">
          Tonal
        </Button>
        <Button variant="tonal" size="md">
          Tonal
        </Button>
        <Button variant="tonal" size="lg">
          Tonal
        </Button>
        <Button variant="tonal" size="xl">
          Tonal
        </Button>
      </section>
      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Button variant="outlined" size="xs" disabled>
          <Icon name="favorite" />
          Outlined
        </Button>
        <Button variant="outlined" size="xs">
          <Icon name="favorite" />
          Outlined
        </Button>
        <Button variant="outlined" size="sm">
          <Icon name="favorite" />
          Outlined
        </Button>
        <Button variant="outlined" size="md">
          <Icon name="favorite" />
          Outlined
        </Button>
        <Button variant="outlined" size="lg">
          <Icon name="favorite" />
          Outlined
        </Button>
        <Button variant="outlined" size="xl">
          <Icon name="favorite" />
          Outlined
        </Button>
      </section>
      <section
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}>
        <Button variant="text" size="xs" disabled>
          Text
        </Button>
        <Button variant="text" size="xs">
          Text
        </Button>
        <Button variant="text" size="sm">
          Text
        </Button>
        <Button variant="text" size="md">
          Text
        </Button>
        <Button variant="text" size="lg">
          Text
        </Button>
        <Button variant="text" size="xl">
          Text
        </Button>
      </section>
    </main>
  );
};

export default Home;
