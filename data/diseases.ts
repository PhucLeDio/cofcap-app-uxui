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
    id: "abiotic",
    name: "Abiotic",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
    description:
      "Abiotic diseases are caused by non-living factors, impacting plant health due to adverse environmental condit...",
  },
  {
    id: "agaricomycetes",
    name: "Agaricomycetes",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80",
    description:
      "Agaricomycetes are a class of fungi that includes various plant pathogens, notably thos...",
  },
  {
    id: "alternaria",
    name: "Alternaria",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
    description:
      "Alternaria is a genus of fungi that includes several plant pathogenic species. These fu...",
  },
  {
    id: "bacteria",
    name: "Bacteria",
    image:
      "https://images.unsplash.com/photo-1465056836199-7c87ef5f3ca9?w=400&q=80",
    description:
      "Bacterial diseases in plants are caused by various species of bacteria. Common symptoms...",
  },
  {
    id: "pests",
    name: "Garden Pests",
    image:
      "https://images.unsplash.com/photo-1577720643272-265fbb2b5fb5?w=400&q=80",
    description:
      "Garden pests encompass a wide range of organisms, including insects, mites, and o...",
  },
];

export const DISEASE_CATEGORIES: DiseaseCategory[] = [
  {
    id: "whole",
    title: "Diseases of the Whole Plant",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
  },
  {
    id: "leaves",
    title: "Diseases in Leaves",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
  },
  {
    id: "flowers",
    title: "Diseases in Flowers",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&q=80",
  },
  {
    id: "fruits",
    title: "Diseases in Fruits",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=80",
  },
  {
    id: "stems",
    title: "Diseases in Stems",
    image:
      "https://images.unsplash.com/photo-1434621671032-86341ef42aba?w=400&q=80",
  },
  {
    id: "roots",
    title: "Diseases in Roots",
    image:
      "https://images.unsplash.com/photo-1500618014966-fdf266b08412?w=400&q=80",
  },
  {
    id: "pests",
    title: "Diseases Caused by Pests",
    image:
      "https://images.unsplash.com/photo-1577720643272-265fbb2b5fb5?w=400&q=80",
  },
  {
    id: "soil",
    title: "Diseases Caused by Soil",
    image:
      "https://images.unsplash.com/photo-1524694888412-b4e2f0e05cc6?w=400&q=80",
  },
];

export const DIAGNOSIS_HISTORY = [
  {
    date: "Today, Dec 23, 2023",
    items: [
      {
        id: "abiotic",
        name: "Abiotic",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
        description:
          "Abiotic diseases are caused by non-living factors, such as adverse environmental conditions or improper care practices. Examples include nutrient deficiencies, water stress, and exposure to extreme temperatures.",
      },
      {
        id: "healthy",
        name: "Healthy Plant",
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400&q=80",
        description: "No health problems or diseases were detected.",
      },
    ],
  },
  {
    date: "Yesterday, Dec 22, 2023",
    items: [
      {
        id: "ascomycetes",
        name: "Ascomycetes",
        image:
          "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&q=80",
        description:
          "Ascomycetes are a diverse group of fungi that includes plant pathogens causing various diseases. They reproduce through specialized structures called asci, producing spores that contribute to disease spread.",
      },
      {
        id: "coccoidea",
        name: "Coccoidea",
        image:
          "https://images.unsplash.com/photo-1549888534-1f7e4d0aeba3?w=400&q=80",
        description:
          "Coccoidea, commonly known as scale insects, are small, sap-feeding pests that can infest various plant species. They often appear as tiny, immobile bumps on stems and leaves. Scale insects secrete a protective shell-like covering that can make them challenging to control.",
      },
    ],
  },
  {
    date: "Dec 21, 2023",
    items: [
      {
        id: "biotic_burn",
        name: "Biotic Burn",
        image:
          "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
        description:
          "Biotic burn, also known as biotic stress, refers to damage or negative effects on plants caused by living organisms, such as insects, pathogens, or competing plants. It manifests as visible symptoms akin to environmental stress.",
      },
      {
        id: "alternaria",
        name: "Alternaria",
        image:
          "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
        description:
          "Alternaria is a genus of fungi that includes several plant pathogenic species. These fungi can cause leaf spot diseases on a wide range of plants, leading to the development of dark lesions on leaves and potential defoliation.",
      },
    ],
  },
];

export const CATEGORY_DISEASES: Record<string, DiseaseItem[]> = {
  pests: [
    {
      id: "anthracnose",
      name: "Anthracnose",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
      description:
        "Anthracnose is a fungal disease caused by various species of fungi in the genus Colletotrichum. It affects a wide range of plants, causing dark, sunken lesions on leaves, stems, and fruits.",
    },
    {
      id: "coccoidea",
      name: "Coccoidea",
      image:
        "https://images.unsplash.com/photo-1549888534-1f7e4d0aeba3?w=400&q=80",
      description:
        "Coccoidea, commonly known as scale insects, are small, sap-feeding pests that can infest various plant species. They often appear as tiny, immobile bumps on stems and leaves. Scale insects secrete a protective shell-like covering that can make them challenging to control.",
    },
    {
      id: "pests",
      name: "Garden Pests",
      image:
        "https://images.unsplash.com/photo-1577720643272-265fbb2b5fb5?w=400&q=80",
      description:
        "Garden pests encompass a wide range of organisms, including insects, mites, and other small creatures that can damage plants. Common garden pests include aphids, spider mites, whiteflies, and caterpillars. They can cause direct damage by feeding on plant tissues or indirectly by transmitting diseases.",
    },
    {
      id: "hemiptera",
      name: "Hemiptera",
      image:
        "https://images.unsplash.com/photo-1534356589-87d2d9ae1b79?w=400&q=80",
      description:
        "Hemiptera is an order of insects that includes sap-sucking pests like aphids, whiteflies, and leafhoppers. These insects have piercing-sucking mouthparts and can transmit plant diseases.",
    },
    {
      id: "homoptera",
      name: "Homoptera",
      image:
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400&q=80",
      description:
        "Homoptera is a suborder of insects that includes various sap-sucking pests, such as aphids, cicadas, and leafhoppers. These insects have piercing-sucking mouthparts called stylets, which they use to feed on plant sap. Homopterans can cause damage to plants by withdrawing nutrients and may transmit plant diseases.",
    },
  ],
};

export const DISEASE_DETAILS: Record<string, any> = {
  abiotic: {
    overview:
      "Abiotic diseases are caused by non-living factors, impacting plant health due to adverse environmental conditions or improper care practices.",
    symptoms: [
      "Yellowing or discoloration of leaves.",
      "Leaf burn or scorch.",
      "Stunted growth.",
      "Poor fruit development.",
    ],
    causes: [
      "Environmental stress factors like extreme temperatures, drought, or waterlogging.",
      "Soil nutrient imbalances.",
      "Poor soil drainage.",
    ],
    treatment: [
      "Adjust care practices based on specific symptoms.",
      "Improve soil drainage.",
      "Provide proper irrigation and mulching.",
      "Use balanced fertilizers.",
      "Protect plants from extreme weather conditions.",
    ],
    prevention: [
      "Choose plant varieties suited to the local climate.",
      "Implement proper watering and fertilizing practices.",
      "Regularly monitor for signs of stress and adjust care accordingly.",
    ],
    conclusion:
      "Abiotic diseases require careful observation and tailored to address the underlying environmental factors affecting plant health. Implementing preventive measures is key to minimizing the impact of abiotic stress on plants.",
  },
  pests: {
    overview:
      "Garden pests, including insects and small creatures, pose a threat to plant health in gardens and landscapes. Their activities can result in direct damage, reducing plant vigor, and may transmit diseases.",
    symptoms: [
      "Chewing marks on leaves.",
      "Wilting caused by sap extraction.",
      "Stippling and discoloration.",
      "Holes in fruits.",
    ],
    causes: [
      "Warm and humid conditions.",
      "Lack of natural predators.",
      "Imported or infested plant material.",
    ],
    pests: [
      "Aphids: Sap-sucking insects causing wilting.",
      "Whiteflies: Transmit diseases, feed on sap.",
      "Caterpillars: Larvae chewing on leaves.",
      "Spider Mites: Cause stippling and discoloration.",
      "Beetles: Feed on various plant parts.",
      "Rodents: Gnaw on stems and roots.",
    ],
    treatment: [
      "Cultural Practices: Sanitation, crop rotation, and choosing resistant varieties.",
      "Biological Control: Introduce natural predators.",
      "Chemical Control: Use insecticidal soaps or neem oil cautiously.",
      "Physical Barriers: Install row covers and sticky traps.",
    ],
    prevention: [
      "Regular monitoring.",
      "Companion planting.",
      "Encouraging natural predators.",
    ],
    conclusion:
      "Integrated pest management, combining cultural, biological, and, if needed, chemical methods, is crucial for effective garden pest control. Early intervention and sustainable practices help maintain plant health.",
  },
};
