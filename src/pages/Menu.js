import React from "react";
import Layout from "./../components/Layout/Layout";
import Images from "../images/1.jpg";
const soupItemsVeg = [
  {
    id: 1,
    name: 'Rasam',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    price: '$4.99',
    image: "https://i.pinimg.com/236x/af/a6/25/afa625b64e63ccd145b0aa02f2fb866b.jpg"
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: Images,
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];


const soupItemsNonVeg = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  }
];

const appetizersItemsVeg = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];


const appetizersItemsNonVeg = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];

const southIndianTiffins = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const dosaItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const vegEntreesItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const nonVegEntreesItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 14,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 15,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 16,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 17,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
  ,
  {
    id: 18,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];

const seaFoodItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];

const TandooriVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  }
];

const TandooriNonVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const RotiBreadItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 13,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const vegBriyaniItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const nonVegBiryaniItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const vegPulaoItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const nonVegpulaoItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const indoChineeseVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const indoChineeseNonVegItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const dessertItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const beverages = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 9,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 10,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 11,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 12,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const sideItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  },
  {
    id: 4,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 5,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 6,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 7,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  },
  {
    id: 8,
    name: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center, served with vanilla ice cream.',
    image: 'https://example.com/lava-cake.jpg'
  }
];
const kidsItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.',
    image: 'https://example.com/margherita.jpg'
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description: 'Crispy romaine lettuce with Caesar dressing, croutons, and parmesan.',
    image: 'https://example.com/caesar-salad.jpg'
  },
  {
    id: 3,
    name: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection, served with lemon butter sauce.',
    image: 'https://example.com/grilled-salmon.jpg'
  }
];
const Menu = () => {
  return (
    <Layout>
      <div className="Adds">
        <div className="menu-main">
          <h2>Mythris’s Delicious Menu</h2>
        </div>
        <div className="menuItem-type">
          <h2>Soups (Veg)</h2>
        </div>
        <div className="menu-container">

          {soupItemsVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>
            </div>
          ))}
        </div>

        <div className="menuItem-type">
          <h2>Soups (Non-Veg)</h2>
        </div>
        <div className="menu-container">

          {soupItemsNonVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Appetizers (Veg)</h2>
        </div>
        <div className="menu-container">

          {appetizersItemsVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Appetizers (Non-Veg)</h2>
        </div>
        <div className="menu-container">

          {appetizersItemsNonVeg.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>South Indian tiffins</h2>
        </div>
        <div className="menu-container">

          {southIndianTiffins.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Dosa's</h2>
        </div>
        <div className="menu-container">

          {dosaItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Veg Entrees</h2>
        </div>
        <div className="menu-container">

          {vegEntreesItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Non-Veg Entrees</h2>
        </div>
        <div className="menu-container">

          {nonVegEntreesItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Sea Food</h2>
        </div>
        <div className="menu-container">

          {seaFoodItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Tandoori (Veg)</h2>
        </div>
        <div className="menu-container">

          {TandooriVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Tandoori (Non-Veg)</h2>
        </div>
        <div className="menu-container">

          {TandooriNonVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Roti Bread</h2>
        </div>
        <div className="menu-container">

          {RotiBreadItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Biryani (veg)</h2>
        </div>
        <div className="menu-container">

          {vegBriyaniItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Biryani (Non-veg)</h2>
        </div>
        <div className="menu-container">

          {nonVegBiryaniItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Pulao (veg)</h2>
        </div>
        <div className="menu-container">

          {vegPulaoItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Pulao (Non-veg)</h2>
        </div>
        <div className="menu-container">

          {nonVegpulaoItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Indo Chineese (veg)</h2>
        </div>
        <div className="menu-container">

          {indoChineeseVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Indo Chineese (Non-veg)</h2>
        </div>
        <div className="menu-container">

          {indoChineeseNonVegItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Desserts</h2>
        </div>
        <div className="menu-container">

          {dessertItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Beverages</h2>
        </div>
        <div className="menu-container">

          {beverages.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Sides</h2>
        </div>
        <div className="menu-container">

          {sideItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
        <div className="menuItem-type">
          <h2>Kids Menu</h2>
        </div>
        <div className="menu-container">

          {kidsItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-title">{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <p className="menu-price"> {item.price} </p>

            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
