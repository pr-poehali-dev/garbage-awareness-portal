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
    <section id="map" className="py-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-2xl">🗺️ Пункты приёма вторсырья</h2>
          <p className="text-2xl text-white/90">Найди ближайший пункт и сдай отходы правильно!</p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white/90 backdrop-blur border-4 border-yellow-400">
            <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-400 data-[state=active]:to-orange-400 data-[state=active]:text-gray-900 font-bold">Все</TabsTrigger>
            <TabsTrigger value="plastic" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-400 data-[state=active]:to-cyan-400 data-[state=active]:text-white font-bold">♻️ Пластик</TabsTrigger>
            <TabsTrigger value="glass" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-400 data-[state=active]:to-emerald-400 data-[state=active]:text-white font-bold">🍾 Стекло</TabsTrigger>
            <TabsTrigger value="batteries" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-400 data-[state=active]:to-pink-400 data-[state=active]:text-white font-bold">🔋 Батарейки</TabsTrigger>
            <TabsTrigger value="electronics" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-400 data-[state=active]:to-indigo-400 data-[state=active]:text-white font-bold">📱 Электроника</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.map((point, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white/95 backdrop-blur border-4 border-yellow-300 hover:border-yellow-400">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{point.name}</h3>
                      <p className="text-gray-700 flex items-center gap-2 text-lg">
                        <Icon name="MapPin" size={20} className="text-blue-600" />
                        {point.address}
                      </p>
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white">
                      <Icon name="Navigation" size={20} />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {point.types.map((type, i) => (
                      <Badge key={i} className="text-base px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold">
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
                <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white/95 backdrop-blur border-4 border-blue-300">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{point.name}</h3>
                  <p className="text-gray-700 flex items-center gap-2 text-lg">
                    <Icon name="MapPin" size={20} className="text-blue-600" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="glass" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('стекло')).map((point, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white/95 backdrop-blur border-4 border-green-300">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{point.name}</h3>
                  <p className="text-gray-700 flex items-center gap-2 text-lg">
                    <Icon name="MapPin" size={20} className="text-green-600" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="batteries" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('батарейки')).map((point, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white/95 backdrop-blur border-4 border-red-300">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{point.name}</h3>
                  <p className="text-gray-700 flex items-center gap-2 text-lg">
                    <Icon name="MapPin" size={20} className="text-red-600" />
                    {point.address}
                  </p>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="electronics" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              {recyclingPoints.filter(p => p.types.includes('электроника')).map((point, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 bg-white/95 backdrop-blur border-4 border-purple-300">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{point.name}</h3>
                  <p className="text-gray-700 flex items-center gap-2 text-lg">
                    <Icon name="MapPin" size={20} className="text-purple-600" />
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