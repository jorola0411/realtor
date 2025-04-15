import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import listings from '../data/Listing';
import 'leaflet/dist/leaflet.css';
import maphero from '../assets/maphero.png'

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  iconSize: [30, 30],
});

const filters = ['Current', 'Completed', 'Now Selling', 'Sold Out'];

export default function Map() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredListings = listings.filter((item) => {
    const matchesFilter = !activeFilter || item.status === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <>
    <div className='relative isolate flex flex-col justify-end overflow-hidden'>
    <img src={maphero} className='w-full'/>
    <div class="absolute inset-0 flex items-center md:justify-left  px-4">
        <h2 class="text-white sm:text-5xl md:text-7xl z-10 md:mt-150 md:max-w-lg  sm:max-w-md  sm:text-center md:text-left">Connecting People & Places</h2>
    </div>
    </div>
    <section className="p-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
      
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded text-sm transition ${
              activeFilter === filter
                ? 'bg-gray-800 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveFilter(filter === activeFilter ? null : filter)}
          >
            {filter}
          </button>
        ))}

        <div className="ml-auto flex items-center border border-gray-300 rounded px-2 py-1">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="outline-none text-sm bg-transparent"
          />
        </div>
      </div>

      <div className="h-[500px] w-full rounded overflow-hidden shadow-md">
        <MapContainer center={[49.25, -123]} zoom={14} scrollWheelZoom={false} className="h-full w-full z-0">
          <TileLayer
            attribution='&copy; OpenStreetMap'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredListings.map((listing) => (
            <Marker key={listing.id} position={listing.position} icon={customIcon}>
              <Popup>{listing.title} ({listing.status}) <br/> {listing.price}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
    </>
  );
}
