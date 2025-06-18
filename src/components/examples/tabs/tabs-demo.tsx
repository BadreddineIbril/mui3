import Icon from "@/components/misc/icon";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@/components/ui/tabs";

const TabsDemo = () => {
  return (
    <div className="demo">
      <Tabs defaultTab="flight">
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
        <TabsContent value="flight">Flight content</TabsContent>
        <TabsContent value="trips">Trips content</TabsContent>
        <TabsContent value="explore">Explore content</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsDemo;
