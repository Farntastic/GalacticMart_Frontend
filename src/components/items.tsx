const items = [
    {
      id: 1,
      category: "Weapon",
      title: "Sword",
      img: "https://thumb.ac-illust.com/48/48e5606e14c65071e25f380e71c6b181_w.jpeg",
      description:
        "Forged from the heart of a thunderstorm, this sword crackles with raw energy. The blade, sleek and shining with electric blue veins, has been imbued with the power of lightning itself.",
      quantity: 2,
      price: 2500,
    },
    {
      id: 2,
      category: "Gun",
      title: "Pistol",
      img: "https://media.istockphoto.com/id/1218529654/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9B%E0%B8%B7%E0%B8%99%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%8B%E0%B8%A5-%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-8-%E0%B8%9A%E0%B8%B4%E0%B8%95%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=pudWXJIPBsCEGeYpVIiSH7I3yLl4L4VjE6gtC57pnRg=",
      description:
        "A sleek semi-automatic pistol designed for precision and rapid fire. Equipped with an ergonomic grip and enhanced sights, making it ideal for close-quarters combat.",
      quantity: 5,
      price: 1800,
    },
    {
      id: 3,
      category: "Medicine",
      title: "Red Button",
      img: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-pixelated-magic-potion-icon-a-pixel-art-game-symbol-of-enchantment-png-image_12663721.png",
      description:
        "A mysterious red potion rumored to restore vitality instantly. Its effects are said to be nearly magical, making it a must-have for adventurers.",
      quantity: 10,
      price: 500,
    },
    {
      id: 4,
      category: "Weapon",
      title: "Sword",
      img: "https://thumb.ac-illust.com/48/48e5606e14c65071e25f380e71c6b181_w.jpeg",
      description:
        "Forged from the heart of a thunderstorm, this sword crackles with raw energy. The blade, sleek and shining with electric blue veins, has been imbued with the power of lightning itself.",
      quantity: 2,
      price: 2500,
    },
    {
      id: 5,
      category: "Gun",
      title: "Pistol",
      img: "https://media.istockphoto.com/id/1218529654/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9B%E0%B8%B7%E0%B8%99%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%8B%E0%B8%A5-%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-8-%E0%B8%9A%E0%B8%B4%E0%B8%95%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=pudWXJIPBsCEGeYpVIiSH7I3yLl4L4VjE6gtC57pnRg=",
      description:
        "A sleek semi-automatic pistol designed for precision and rapid fire. Equipped with an ergonomic grip and enhanced sights, making it ideal for close-quarters combat.",
      quantity: 5,
      price: 1800,
    },
    {
      id: 6,
      category: "Medicine",
      title: "Red Button",
      img: "https://png.pngtree.com/png-clipart/20230923/original/pngtree-pixelated-magic-potion-icon-a-pixel-art-game-symbol-of-enchantment-png-image_12663721.png",
      description:
        "A mysterious red potion rumored to restore vitality instantly. Its effects are said to be nearly magical, making it a must-have for adventurers.",
      quantity: 10,
      price: 500,
    }, {
      id: 7,
      category: "Weapon",
      title: "Sword",
      img: "https://thumb.ac-illust.com/48/48e5606e14c65071e25f380e71c6b181_w.jpeg",
      description:
        "Forged from the heart of a thunderstorm, this sword crackles with raw energy. The blade, sleek and shining with electric blue veins, has been imbued with the power of lightning itself.",
      quantity: 2,
      price: 2500,
    },
    {
      id: 8,
      category: "Gun",
      title: "Pistol",
      img: "https://media.istockphoto.com/id/1218529654/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%9B%E0%B8%B7%E0%B8%99%E0%B8%A8%E0%B8%B4%E0%B8%A5%E0%B8%9B%E0%B8%B0%E0%B8%9E%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%8B%E0%B8%A5-%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-8-%E0%B8%9A%E0%B8%B4%E0%B8%95%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%A7%E0%B9%87%E0%B8%9A%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B9%81%E0%B8%A2%E0%B8%81%E0%B8%9A%E0%B8%99%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7.jpg?s=612x612&w=0&k=20&c=pudWXJIPBsCEGeYpVIiSH7I3yLl4L4VjE6gtC57pnRg=",
      description:
        "A sleek semi-automatic pistol designed for precision and rapid fire. Equipped with an ergonomic grip and enhanced sights, making it ideal for close-quarters combat.",
      quantity: 5,
      price: 1800,
    },
  
  ];
  
  export default items;
  