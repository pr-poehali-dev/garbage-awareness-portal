import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface RecyclingPoint {
  name: string;
  address: string;
  types: string[];
  lat: number;
  lng: number;
}

interface MapSectionProps {
  recyclingPoints: RecyclingPoint[];
}

const MapSection = ({ recyclingPoints }: MapSectionProps) => {
  return (
    <section id="map" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Карта пунктов приёма Омска</h2>
          <p className="text-xl text-muted-foreground">Найди ближайший пункт сдачи вторсырья</p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="plastic">Пластик</TabsTrigger>
            <TabsTrigger value="glass">Стекло</TabsTrigger>
            <TabsTrigger value="batteries">Батарейки</TabsTrigger>
            <TabsTrigger value="electronics">Электроника</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        {point.address}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Icon name="Navigation" size={16} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {point.types.map((type, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="plastic" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('пластик')).map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="glass" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('стекло')).map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="batteries" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('батарейки')).map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="electronics" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('электроника')).map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all">
                  <h3 className="text-xl font-bold mb-2">{point.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MapSection;
