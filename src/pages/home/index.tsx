import Icon from "@/components/misc/icon";
import Button from "@/components/ui/button";

const Home = () => {
  return (
    <main
      data-page="home"
      style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
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
