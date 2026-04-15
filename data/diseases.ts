export type DiseaseItem = {
  id: string;
  name: string;
  image: string;
};

export type DiseaseCategory = {
  id: string;
  title: string;
  image: string;
};

export const COMMON_DISEASES: DiseaseItem[] = [
  { id: '1', name: 'Abiotic', image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80' },
  { id: '2', name: 'Agaricomycetes', image: 'https://images.unsplash.com/photo-1549429161-59e5f5f5f5f5?w=400&q=80' }, // Mushroom type
  { id: '3', name: 'Altenaria', image: 'https://images.unsplash.com/photo-1558905628-66a98fb49ea6?w=400&q=80' },
  { id: '4', name: 'Anthracnose', image: 'https://images.unsplash.com/photo-1528629202416-2da983637651?w=400&q=80' },
];

export const DISEASE_CATEGORIES: DiseaseCategory[] = [
  { id: 'whole', title: 'Diseases of the Whole Plant', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=80' },
  { id: 'leaves', title: 'Diseases in Leaves', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=400&q=80' },
  { id: 'flowers', title: 'Diseases in Flowers', image: 'https://images.unsplash.com/photo-1487010363384-6b814d73ae4e?w=400&q=80' },
  { id: 'fruits', title: 'Diseases in Fruits', image: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&q=80' },
];
