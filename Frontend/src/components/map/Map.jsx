import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  return (
    <MapContainer
      center={
        items.length === 1
          ? [items[0].latitude, items[0].longitude]
          : items.length > 0
            ? [items[0].latitude, items[0].longitude] 
            : [24.8607, 67.0011]
      }
      zoom={7}
      scrollWheelZoom={false}
      className="
        w-full
        h-full
        rounded-[20px]
      "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">
         OpenStreetMap</a> \contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {items.map((item) => (
        <Pin
          item={item}
          key={item.id}
        />
      ))}
    </MapContainer>
  );
}

export default Map;