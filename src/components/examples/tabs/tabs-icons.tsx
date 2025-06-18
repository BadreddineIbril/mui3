import Icon from "@/components/misc/icon";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

const TabsIcons = () => {
  return (
    <div className="demo">
      {[...Array(2)].map((_, i) => (
        <Tabs key={i} defaultTab="flight" inlineIcon={i === 1}>
          <TabsList>
            <TabsTrigger value="flight">
              <Icon name="flight" /> Flight
            </TabsTrigger>
            <TabsTrigger value="trips">
              <Icon name="trip" /> Trips
            </TabsTrigger>
            <TabsTrigger value="explore">
              <Icon name="explore" /> Explore
            </TabsTrigger>
          </TabsList>
        </Tabs>
      ))}
    </div>
  );
};

export default TabsIcons;
