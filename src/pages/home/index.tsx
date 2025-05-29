import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";
import Checkbox from "@/components/ui/checkox";
import { Chips, ChipItem } from "@/components/ui/chips";
import IconButton from "@/components/ui/icon-button";
import Radio from "@/components/ui/radio";
import Switch from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TextField from "@/components/ui/text-field";
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

  return (
    <main
      data-page="home"
      style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
