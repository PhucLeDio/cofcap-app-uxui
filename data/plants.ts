export type PlantItem = { 
  id: string; 
  name: string; 
  scientific: string; 
  category: string; 
  image: string 
};

export const ALL_PLANTS: PlantItem[] = [
  // Foliage
  { id: '1', name: 'Prayer Plant', scientific: 'Goeppertia orbifolia', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1542838384-3c6607bbdcab?w=400&q=80' },
  { id: '2', name: 'Baby Rubber Plant', scientific: 'Peperomia obtusifolia', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1596707321035-c331908dce28?w=400&q=80' },
  { id: '3', name: 'Snake Plant', scientific: 'Sansevieria trifasciata', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1572621426421-ad9039dc359f?w=400&q=80' },
  { id: '4', name: 'Swiss Cheese Plant', scientific: 'Monstera deliciosa', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80' },
  { id: '5', name: 'Dumbcane', scientific: 'Dieffenbachia seguine', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1599933333331-ae1059f13115?w=400&q=80' },
  { id: '6', name: 'Fiddle Leaf Fig', scientific: 'Ficus lyrata', category: 'Foliage Plants', image: 'https://images.unsplash.com/photo-1597055931211-1339d2c5bcc1?w=400&q=80' },
  
  // Succulents
  { id: 's1', name: 'Aloe Vera', scientific: 'Aloe vera', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1596547609652-9fc5b80a6baf?w=400&q=80' },
  { id: 's2', name: 'Echeveria', scientific: 'Echeveria elegans', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80' },
  { id: 's3', name: 'Jade Plant', scientific: 'Crassula ovata', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1520302630591-fd1736b2b05b?w=400&q=80' },
  { id: 's4', name: 'Desert Agave', scientific: 'Agave deserti', category: 'Succulents & Cacti', image: 'https://images.unsplash.com/photo-1510860555711-2e2e8acac19b?w=400&q=80' },
  
  // Flowering
  { id: 'f1', name: 'Orchid', scientific: 'Phalaenopsis amabilis', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1490750967868-88cb44cb2754?w=400&q=80' },
  { id: 'f2', name: 'Peace Lily', scientific: 'Spathiphyllum wallisii', category: 'Flowering Plants', image: 'https://images.unsplash.com/photo-1567225591450-06036b3392a6?w=400&q=80' },
  
  // Herbs
  { id: 'h1', name: 'Basil', scientific: 'Ocimum basilicum', category: 'Herbs', image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80' },
  { id: 'h2', name: 'Rosemary', scientific: 'Salvia rosmarinus', category: 'Herbs', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=400&q=80' },
];
