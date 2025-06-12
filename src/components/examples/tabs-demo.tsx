import Icon from "@/components/misc/icon";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";

const TabsDemo = () => {
  return (
    <div className="demo column">
      <Tabs style={{ width: "500px" }} defaultTab="flight">
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
      <Tabs style={{ width: "500px" }} defaultTab="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
