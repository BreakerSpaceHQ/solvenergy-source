
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, Plus, Trash2 } from "lucide-react";

interface Appliance {
  id: string;
  name: string;
  wattage: number;
  quantity: number;
  hours: number;
}

const LoadCalculatorSection = () => {
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: '1', name: 'LED Bulb (9W)', wattage: 9, quantity: 1, hours: 6 },
    { id: '2', name: 'Fan (75W)', wattage: 75, quantity: 1, hours: 8 },
    { id: '3', name: 'TV (150W)', wattage: 150, quantity: 1, hours: 5 },
  ]);
  
  const [newAppliance, setNewAppliance] = useState({
    name: '',
    wattage: 0,
    quantity: 1,
    hours: 1
  });

  const commonAppliances = [
    { name: 'LED Bulb (9W)', wattage: 9 },
    { name: 'CFL Bulb (18W)', wattage: 18 },
    { name: 'Tube Light (40W)', wattage: 40 },
    { name: 'Ceiling Fan (75W)', wattage: 75 },
    { name: 'Refrigerator (150W)', wattage: 150 },
    { name: 'TV LED (100W)', wattage: 100 },
    { name: 'Laptop (65W)', wattage: 65 },
    { name: 'Air Conditioner (1500W)', wattage: 1500 },
    { name: 'Water Heater (2000W)', wattage: 2000 },
    { name: 'Washing Machine (500W)', wattage: 500 },
  ];

  const addAppliance = () => {
    if (newAppliance.name && newAppliance.wattage > 0) {
      const appliance: Appliance = {
        id: Date.now().toString(),
        ...newAppliance
      };
      setAppliances([...appliances, appliance]);
      setNewAppliance({ name: '', wattage: 0, quantity: 1, hours: 1 });
    }
  };

  const addCommonAppliance = (common: { name: string; wattage: number }) => {
    const appliance: Appliance = {
      id: Date.now().toString(),
      name: common.name,
      wattage: common.wattage,
      quantity: 1,
      hours: 1
    };
    setAppliances([...appliances, appliance]);
  };

  const removeAppliance = (id: string) => {
    setAppliances(appliances.filter(app => app.id !== id));
  };

  const updateAppliance = (id: string, field: keyof Appliance, value: string | number) => {
    setAppliances(appliances.map(app => 
      app.id === id ? { ...app, [field]: value } : app
    ));
  };

  const totalDailyLoad = appliances.reduce((total, app) => 
    total + (app.wattage * app.quantity * app.hours), 0
  );

  const totalPower = appliances.reduce((total, app) => 
    total + (app.wattage * app.quantity), 0
  );

  const recommendedBatteryCapacity = Math.ceil(totalDailyLoad / 12); // Assuming 12V system
  const recommendedSolarPanels = Math.ceil(totalDailyLoad / 5); // Assuming 5 peak sun hours

  return (
    <section id="calculator" className="solar-section bg-[#fffab2b3] dark:bg-gray-800 py-24 transition-colors duration-300">
      <div className="solar-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-10">
            <Calculator className="h-8 w-8 text-solar-blue dark:text-blue-300 mr-3" />
            <h2 className="section-title mb-0">Solar Load Calculator</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
            Calculate your power requirements to determine the right solar system size for your home.
            Add your appliances and get instant recommendations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Input */}
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-solar-blue dark:text-blue-300">Add Appliances</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Select from common appliances or add custom ones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Common Appliances */}
                <div>
                  <Label className="text-sm font-medium mb-2 block dark:text-gray-300">Quick Add:</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {commonAppliances.slice(0, 6).map((appliance, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => addCommonAppliance(appliance)}
                        className="text-xs p-2 h-auto dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                      >
                        {appliance.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Custom Appliance */}
                <div className="border-t pt-4 dark:border-gray-600">
                  <Label className="text-sm font-medium mb-2 block dark:text-gray-300">Custom Appliance:</Label>
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <Label htmlFor="appliance-name" className="text-xs text-gray-600 dark:text-gray-400 mb-1 block">Appliance Name</Label>
                      <Input
                        id="appliance-name"
                        placeholder="e.g., LED Light"
                        value={newAppliance.name}
                        onChange={(e) => setNewAppliance({...newAppliance, name: e.target.value})}
                        className="dark:bg-gray-800 dark:border-gray-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="appliance-wattage" className="text-xs text-gray-600 dark:text-gray-400 mb-1 block">Wattage (W)</Label>
                      <Input
                        id="appliance-wattage"
                        type="number"
                        placeholder="e.g., 100"
                        value={newAppliance.wattage || ''}
                        onChange={(e) => setNewAppliance({...newAppliance, wattage: Number(e.target.value)})}
                        className="dark:bg-gray-800 dark:border-gray-600"
                      />
                    </div>
                  </div>
                  <Button onClick={addAppliance} className="w-full bg-solar-blue hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                    <Plus className="h-4 w-4 mr-1" />
                    Add Appliance
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Appliances List */}
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-solar-blue dark:text-blue-300">Your Appliances</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  <div className="grid grid-cols-6 gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">
                    <div className="col-span-2">Name</div>
                    <div>Watts</div>
                    <div>Qty</div>
                    <div>Hours/Day</div>
                    <div>Action</div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {appliances.map((appliance) => (
                    <div key={appliance.id} className="grid grid-cols-6 gap-2 items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="col-span-2">
                        <Input
                          value={appliance.name}
                          onChange={(e) => updateAppliance(appliance.id, 'name', e.target.value)}
                          className="text-sm dark:bg-gray-700 dark:border-gray-600"
                          placeholder="Appliance name"
                        />
                      </div>
                      <div>
                        <Input
                          type="number"
                          value={appliance.wattage}
                          onChange={(e) => updateAppliance(appliance.id, 'wattage', Number(e.target.value))}
                          className="text-sm dark:bg-gray-700 dark:border-gray-600"
                          placeholder="Watts"
                        />
                      </div>
                      <div>
                        <Input
                          type="number"
                          value={appliance.quantity}
                          onChange={(e) => updateAppliance(appliance.id, 'quantity', Number(e.target.value))}
                          className="text-sm dark:bg-gray-700 dark:border-gray-600"
                          placeholder="Qty"
                        />
                      </div>
                      <div>
                        <Input
                          type="number"
                          value={appliance.hours}
                          onChange={(e) => updateAppliance(appliance.id, 'hours', Number(e.target.value))}
                          className="text-sm dark:bg-gray-700 dark:border-gray-600"
                          placeholder="Hours"
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeAppliance(appliance.id)}
                        className="p-2 h-8 w-8 dark:border-gray-600 dark:hover:bg-gray-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-solar-blue to-blue-600 text-white">
              <CardHeader>
                <CardTitle className="text-white">Calculation Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">{totalPower}W</div>
                    <div className="text-sm opacity-90">Total Power</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold">{totalDailyLoad}Wh</div>
                    <div className="text-sm opacity-90">Daily Energy</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-solar-blue dark:text-blue-300">Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="font-semibold text-green-800 dark:text-green-300 mb-2">Solar Panel Capacity</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">{recommendedSolarPanels}W</div>
                  <div className="text-sm text-green-700 dark:text-green-400 mt-1">
                    Recommended minimum solar panel wattage
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Battery Capacity</div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{recommendedBatteryCapacity}Ah</div>
                  <div className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                    Recommended battery capacity (12V system)
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Inverter Size</div>
                  <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{Math.ceil(totalPower * 1.2)}W</div>
                  <div className="text-sm text-yellow-700 dark:text-yellow-400 mt-1">
                    Recommended inverter capacity (20% margin)
                  </div>
                </div>

                <Button className="w-full bg-solar-green hover:bg-green-600 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadCalculatorSection;
