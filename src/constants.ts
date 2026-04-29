/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  imageAlt: string;
  imageUrl?: string;
  category: 'starter' | 'main' | 'tandoor' | 'biryani' | 'bread' | 'chinese' | 'dessert' | 'beverage';
  featured?: boolean;
}

export const FEATURED_DISHES: Dish[] = [
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    description: 'Fragrant rice, tender mutton, whole egg. Kolkata-style, cooked in small handis.',
    price: 300,
    imageAlt: 'A bowl of mutton biryani with a boiled egg and coriander',
    imageUrl: '/regenerated_image_1777463602000.png',
    category: 'biryani',
    featured: true
  },
  {
    id: 'chicken-reshmi-butter-masala',
    name: 'Chicken Reshmi Butter Masala',
    description: 'Creamy, mildly sweet, rich gravy. Perfect with butter naan.',
    price: 280,
    imageAlt: 'Creamy orange chicken curry in a bowl with a piece of naan',
    imageUrl: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    featured: true
  },
  {
    id: 'fish-finger',
    name: 'Fish Finger',
    description: 'Crispy bhetki fillets served with mint chutney.',
    price: 220,
    imageAlt: 'Five golden fried fish fingers on a plate with green chutney',
    imageUrl: '/regenerated_image_1777463594291.png',
    category: 'starter',
    featured: true
  },
  {
    id: 'chicken-tikka',
    name: 'Chicken Tikka',
    description: 'Boneless chicken chunks marinated in yogurt and spices, grilled to perfection.',
    price: 260,
    imageAlt: 'Succulent pieces of red-orange grilled chicken tikka',
    imageUrl: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800',
    category: 'tandoor',
    featured: true
  }
];

export const MENU_ITEMS: Dish[] = [
  ...FEATURED_DISHES,
  {
    id: 'chicken-tikka-kebab',
    name: 'Chicken Tikka Kebab',
    description: 'Tender boneless chunks marinated in yogurt and spices.',
    price: 250,
    imageAlt: 'Chicken tikka kebab on a plate',
    category: 'starter'
  },
  {
    id: 'tandoori-chicken-half',
    name: 'Tandoori Chicken (Half)',
    description: 'Classic, smoky, and spicy.',
    price: 200,
    imageAlt: 'Half tandoori chicken',
    category: 'tandoor'
  },
  {
    id: 'mutton-rogan-josh',
    name: 'Mutton Rogan Josh',
    description: 'Slow-cooked Kashmiri style mutton curry.',
    price: 320,
    imageAlt: 'Mutton rogan josh curry',
    category: 'main'
  },
  {
    id: 'hakka-noodles-chicken',
    name: 'Hakka Noodles (Chicken)',
    description: 'Stir-fried noodles with chicken and vegetables.',
    price: 220,
    imageAlt: 'Chicken hakka noodles',
    category: 'chinese'
  },
  {
    id: 'butter-naan',
    name: 'Butter Naan',
    description: 'Soft leavened bread with butter.',
    price: 35,
    imageAlt: 'Butter naan',
    category: 'bread'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Deep-fried milk dumplings in sugar syrup.',
    price: 60,
    imageAlt: 'Gulab jamun in syrup',
    category: 'dessert'
  },
  {
    id: 'masala-chaas',
    name: 'Masala Chaas',
    description: 'Spiced buttermilk.',
    price: 50,
    imageAlt: 'Masala chaas in a glass',
    category: 'beverage'
  }
];
