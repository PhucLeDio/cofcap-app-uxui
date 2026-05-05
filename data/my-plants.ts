/**
 * User Plant Data Types
 * Manages user's personal plant collection and care journal
 */

export type PlantAction =
  | "Watering"
  | "Fertilizing"
  | "Photo"
  | "Misting"
  | "Note"
  | "Rotating";

export type JournalEvent = {
  id: string;
  action: PlantAction;
  dateStr: string;
  note?: string;
  images?: string[];
};

export type UserPlant = {
  id: string;
  name: string;
  scientificName: string;
  genus: string;
  image: string;
  needs: string[]; // Contains icon names or generic identifiers
};

/**
 * User's Plant Collection
 * Plants that the user has added to their personal garden
 */
export const MY_PLANTS: UserPlant[] = [
  {
    id: "prayer-plant",
    name: "Prayer Plant",
    scientificName: "Goeppertia orbifolia",
    genus: "Calathea",
    image:
      "https://images.unsplash.com/photo-1613735164870-13b3554e0193?w=800&q=80",
    needs: ["water", "nutrition", "mist"],
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    genus: "Dracaena",
    image:
      "https://images.unsplash.com/photo-1593019808399-52e85eb6eac2?w=800&q=80",
    needs: ["water", "nutrition", "mist", "sun"],
  },
  {
    id: "ghost-plant",
    name: "Ghost Plant (Mother of...",
    scientificName: "Graptopetalum paraguayense",
    genus: "Graptopetalum",
    image:
      "https://images.unsplash.com/photo-1555582963-4414eb1f07f4?w=800&q=80",
    needs: ["water", "sun"],
  },
  {
    id: "aloe-vera",
    name: "Aloe Vera",
    scientificName: "Aloe vera",
    genus: "Aloe",
    image:
      "https://images.unsplash.com/photo-1596547609652-9fc5d8d428ce?w=800&q=80",
    needs: ["water", "nutrition", "mist", "sun"],
  },
  {
    id: "jade-plant",
    name: "Jade Plant (Dollar Plant)",
    scientificName: "Crassula ovata",
    genus: "Crassula",
    image:
      "https://images.unsplash.com/photo-1599814421160-c3d31fc3c25b?w=800&q=80",
    needs: ["water", "sun"],
  },
];

/**
 * Plant Care Journals
 * Tracks care activities for each plant (watering, fertilizing, etc.)
 * Key: plant ID, Value: array of journal events
 */
export const PLANT_JOURNALS: Record<string, JournalEvent[]> = {
  "prayer-plant": [
    {
      id: "e1",
      action: "Watering",
      dateStr: "Yesterday · 07:30 AM",
    },
    {
      id: "e2",
      action: "Fertilizing",
      dateStr: "Dec 21, 2023 · 16:00 PM",
    },
    {
      id: "e3",
      action: "Photo",
      dateStr: "Dec 20, 2023 · 08:00 AM",
    },
    {
      id: "e4",
      action: "Misting",
      dateStr: "Dec 19, 2023 · 09:45 AM",
    },
    {
      id: "e5",
      action: "Note",
      dateStr: "Dec 19, 2023 · 10:00 AM",
      note: "New shoots begin to give rise to branches and leaf petals. Plants grow well.",
    },
    {
      id: "e6",
      action: "Rotating",
      dateStr: "Dec 18, 2023 · 08:30 AM",
    },
    {
      id: "e7",
      action: "Watering",
      dateStr: "Dec 17, 2023 · 17:30 PM",
    },
    {
      id: "e8",
      action: "Note",
      dateStr: "Dec 16, 2023 · 10:00 AM",
      note: "The plant begins to grow new shoots. Leaf color is in good condition.",
    },
    {
      id: "e9",
      action: "Photo",
      dateStr: "Dec 15, 2023 · 08:00 AM",
    },
  ],
};
