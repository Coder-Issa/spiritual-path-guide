import { useState, useEffect } from "react";
import FeatureLayout from "./FeatureLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, MapPin, Navigation } from "lucide-react";

const QiblaDirectionPage = () => {
  const [location, setLocation] = useState<{latitude: number, longitude: number} | null>(null);
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null);
  const [deviceOrientation, setDeviceOrientation] = useState<number>(0);
  const [locationError, setLocationError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  // Kaaba coordinates
  const KAABA_LAT = 21.4225;
  const KAABA_LNG = 39.8262;

  const calculateQiblaDirection = (userLat: number, userLng: number) => {
    const lat1 = (userLat * Math.PI) / 180;
    const lat2 = (KAABA_LAT * Math.PI) / 180;
    const deltaLng = ((KAABA_LNG - userLng) * Math.PI) / 180;

    const y = Math.sin(deltaLng) * Math.cos(lat2);
    const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);

    let bearing = (Math.atan2(y, x) * 180) / Math.PI;
    bearing = (bearing + 360) % 360;

    return bearing;
  };

  const getLocation = () => {
    setIsLoading(true);
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser.");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        
        const direction = calculateQiblaDirection(latitude, longitude);
        setQiblaDirection(direction);
        setIsLoading(false);
      },
      (error) => {
        setLocationError(
          error.code === error.PERMISSION_DENIED
            ? "Location access denied. Please enable location services."
            : "Unable to retrieve your location. Please try again."
        );
        setIsLoading(false);
      }
    );
  };

  useEffect(() => {
    // Handle device orientation for compass
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.alpha !== null) {
        setDeviceOrientation(360 - event.alpha);
      }
    };

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation);
      return () => window.removeEventListener('deviceorientation', handleOrientation);
    }
  }, []);

  const getCardinalDirection = (angle: number) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(angle / 45) % 8;
    return directions[index];
  };

  const compassRotation = qiblaDirection !== null ? qiblaDirection - deviceOrientation : 0;

  return (
    <FeatureLayout 
      title="Qibla Direction" 
      icon={<Compass className="h-8 w-8 text-islamic-primary" />}
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Find Qibla Direction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              The Qibla is the direction Muslims face during prayer, pointing towards the Kaaba in Mecca. 
              Use this tool to find the accurate Qibla direction from your current location.
            </p>
            
            {!location && (
              <Button 
                onClick={getLocation} 
                disabled={isLoading}
                className="w-full"
              >
                <MapPin className="h-4 w-4 mr-2" />
                {isLoading ? "Getting Location..." : "Get My Location"}
              </Button>
            )}

            {locationError && (
              <div className="p-4 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg mt-4">
                <p className="text-red-800 dark:text-red-200">{locationError}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {location && qiblaDirection !== null && (
          <>
            <Card>
              <CardHeader>
                <CardTitle className="text-islamic-primary">Your Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Latitude:</strong> {location.latitude.toFixed(6)}°</p>
                  <p><strong>Longitude:</strong> {location.longitude.toFixed(6)}°</p>
                  <p><strong>Qibla Direction:</strong> {qiblaDirection.toFixed(1)}° ({getCardinalDirection(qiblaDirection)})</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-islamic-primary text-center">Qibla Compass</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  {/* Compass */}
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Compass Base */}
                    <div className="absolute inset-0 border-4 border-islamic-primary rounded-full bg-islamic-sage/10">
                      {/* Cardinal Directions */}
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-bold">N</div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-bold">S</div>
                      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-sm font-bold">W</div>
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-bold">E</div>
                      
                      {/* Qibla Direction Arrow */}
                      <div 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                        style={{ 
                          transform: `translate(-50%, -50%) rotate(${compassRotation}deg)` 
                        }}
                      >
                        <Navigation className="h-16 w-16 text-green-600" />
                        <div className="text-center mt-2">
                          <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">QIBLA</span>
                        </div>
                      </div>
                      
                      {/* Center Dot */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-islamic-primary rounded-full"></div>
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-lg font-semibold">
                      Face {qiblaDirection.toFixed(1)}° {getCardinalDirection(qiblaDirection)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      The green arrow points towards the Kaaba in Mecca
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-islamic-primary">Prayer Times Consideration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Remember to check prayer times for your location as well. The Qibla direction remains constant, 
              but prayer times change based on the sun's position throughout the day and year.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Tips for Accurate Direction:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Ensure your device's compass is calibrated</li>
                  <li>• Move away from metal objects</li>
                  <li>• Hold your device flat and level</li>
                  <li>• Allow location access for accuracy</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">About the Kaaba:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Located in Mecca, Saudi Arabia</li>
                  <li>• The most sacred site in Islam</li>
                  <li>• Covered with a black silk cloth (Kiswah)</li>
                  <li>• Muslims circumambulate it during Hajj</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </FeatureLayout>
  );
};

export default QiblaDirectionPage;