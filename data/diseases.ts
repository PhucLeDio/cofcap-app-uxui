export type DiseaseItem = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type DiseaseCategory = {
  id: string;
  title: string;
  image: string;
};

export const COMMON_DISEASES: DiseaseItem[] = [
  { 
    id: 'abiotic', 
    name: 'Abiotic', 
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&q=80',
    description: 'Abiotic diseases are caused by non-living factors, impacting plant health due to adverse environmental condit...'
  },
  { 
    id: 'agaricomycetes', 
    name: 'Agaricomycetes', 
    image: 'https://images.unsplash.com/photo-1551065980-fc0403300878?w=400&q=80',
    description: 'Agaricomycetes are a class of fungi that includes various plant pathogens, notably thos...'
  },
  { 
    id: 'alternaria', 
    name: 'Alternaria', 
    image: 'https://images.unsplash.com/photo-1558905628-66a98fb49ea6?w=400&q=80',
    description: 'Alternaria is a genus of fungi that includes several plant pathogenic species. These fu...'
  },
  { 
    id: 'bacteria', 
    name: 'Bacteria', 
    image: 'https://images.unsplash.com/photo-1528629202416-2da983637651?w=400&q=80',
    description: 'Bacterial diseases in plants are caused by various species of bacteria. Common symptoms...'
  },
  { 
    id: 'pests', 
    name: 'Garden Pests', 
    image: 'https://images.unsplash.com/photo-1599591410423-f308ce7a8f81?w=400&q=80',
    description: 'Garden pests encompass a wide range of organisms, including insects, mites, and o...'
  },
];

export const DISEASE_CATEGORIES: DiseaseCategory[] = [
  { id: 'whole', title: 'Diseases of the Whole Plant', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=80' },
  { id: 'leaves', title: 'Diseases in Leaves', image: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?w=400&q=80' },
  { id: 'flowers', title: 'Diseases in Flowers', image: 'https://images.unsplash.com/photo-1487010363384-6b814d73ae4e?w=400&q=80' },
  { id: 'fruits', title: 'Diseases in Fruits', image: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?w=400&q=80' },
];

export const DISEASE_DETAILS: Record<string, any> = {
  abiotic: {
    overview: 'Abiotic diseases are caused by non-living factors, impacting plant health due to adverse environmental conditions or improper care practices.',
    symptoms: ['Yellowing or discoloration of leaves.', 'Leaf burn or scorch.', 'Stunted growth.', 'Poor fruit development.'],
    causes: ['Environmental stress factors like extreme temperatures, drought, or waterlogging.', 'Soil nutrient imbalances.', 'Poor soil drainage.'],
    treatment: ['Adjust care practices based on specific symptoms.', 'Improve soil drainage.', 'Provide proper irrigation and mulching.', 'Use balanced fertilizers.', 'Protect plants from extreme weather conditions.'],
    prevention: ['Choose plant varieties suited to the local climate.', 'Implement proper watering and fertilizing practices.', 'Regularly monitor for signs of stress and adjust care accordingly.'],
    conclusion: 'Abiotic diseases require careful observation and tailored to address the underlying environmental factors affecting plant health. Implementing preventive measures is key to minimizing the impact of abiotic stress on plants.'
  },
  pests: {
    overview: 'Garden pests, including insects and small creatures, pose a threat to plant health in gardens and landscapes. Their activities can result in direct damage, reducing plant vigor, and may transmit diseases.',
    symptoms: ['Chewing marks on leaves.', 'Wilting caused by sap extraction.', 'Stippling and discoloration.', 'Holes in fruits.'],
    causes: ['Warm and humid conditions.', 'Lack of natural predators.', 'Imported or infested plant material.'],
    pests: [
      'Aphids: Sap-sucking insects causing wilting.', 
      'Whiteflies: Transmit diseases, feed on sap.', 
      'Caterpillars: Larvae chewing on leaves.',
      'Spider Mites: Cause stippling and discoloration.',
      'Beetles: Feed on various plant parts.',
      'Rodents: Gnaw on stems and roots.'
    ],
    treatment: [
      'Cultural Practices: Sanitation, crop rotation, and choosing resistant varieties.', 
      'Biological Control: Introduce natural predators.', 
      'Chemical Control: Use insecticidal soaps or neem oil cautiously.',
      'Physical Barriers: Install row covers and sticky traps.'
    ],
    prevention: ['Regular monitoring.', 'Companion planting.', 'Encouraging natural predators.'],
    conclusion: 'Integrated pest management, combining cultural, biological, and, if needed, chemical methods, is crucial for effective garden pest control. Early intervention and sustainable practices help maintain plant health.'
  }
};
