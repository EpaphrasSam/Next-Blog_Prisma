export const postsData = [
  {
    title: "10 Fashion Trends for This Season",
    excerpt:
      "Explore the latest fashion trends and make a style statement with these trendy outfits and accessories.",
    desc: "Stay ahead in the fashion game with our guide to the top 10 fashion trends of the season. From vibrant colors to chic accessories, we've got you covered. Discover how to create stunning looks that showcase your unique style. Whether you're into casual streetwear or elegant evening wear, this post will inspire your wardrobe choices. Don't miss out on the fashion trends that are dominating the runways and streets. Upgrade your fashion game and turn heads wherever you go!",
    img: "/fashion.png",
    catSlug: "fashion",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Mastering JavaScript Promises",
    excerpt:
      "Learn how to work with JavaScript promises and handle asynchronous operations like a pro.",
    desc: "JavaScript promises are essential for managing asynchronous code effectively. In this comprehensive guide, we delve deep into the world of promises. Discover how to create, chain, and handle promises like a seasoned developer. Say goodbye to callback hell and embrace clean, readable asynchronous code. Whether you're building web applications or working on backend processes, mastering promises is a must. By the end of this post, you'll have the skills to handle complex asynchronous operations with ease.",
    img: "/coding.png",
    catSlug: "coding",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Escape to Paradise: Top Travel Destinations",
    excerpt:
      "Discover the most beautiful travel destinations around the world and plan your dream vacation.",
    desc: "Embark on a journey to discover the world's most breathtaking travel destinations. From pristine beaches to historic cities, our guide covers it all. Learn about the culture, cuisine, and attractions of each location. Whether you're a seasoned traveler or planning your first adventure, these top destinations offer experiences of a lifetime. Get inspired, plan your itinerary, and make memories that will last forever. Your dream vacation starts here!",
    img: "/travel.png",
    catSlug: "travel",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Delicious Food Recipes for Food Lovers",
    excerpt:
      "Indulge in mouthwatering recipes that will satisfy your cravings and tickle your taste buds.",
    desc: "Prepare to tantalize your taste buds with our collection of mouthwatering food recipes. From savory dishes to delectable desserts, we've got recipes for every food lover. Step into the kitchen and learn how to create restaurant-quality meals at home. Whether you're a culinary enthusiast or a novice cook, our easy-to-follow recipes will guide you to success. Get ready to impress your family and friends with your culinary skills!",
    img: "/food.png",
    catSlug: "food",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Fashion Tips: Dressing with Confidence",
    excerpt:
      "Find out how to boost your self-esteem by dressing confidently and expressing your unique style.",
    desc: "Confidence starts with how you look and feel. In this post, we share valuable fashion tips to help you dress with confidence. Discover your personal style, learn to embrace your body shape, and make fashion choices that empower you. From wardrobe essentials to accessorizing like a pro, we've got you covered. Unlock the secrets to feeling fantastic every day with the right outfit. Elevate your self-esteem and make a lasting impression with your style!",
    img: "/style.png",
    catSlug: "style",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Exploring Cultural Diversity: Traditions and Festivals",
    excerpt:
      "Dive into the rich tapestry of world cultures and learn about unique traditions and festivals.",
    desc: "Immerse yourself in the vibrant tapestry of global cultures. This post takes you on a journey to explore unique traditions and festivals from around the world. From colorful celebrations to ancient rituals, you'll gain insight into the rich diversity of human culture. Discover the stories behind these traditions and the significance of each festival. Expand your horizons and celebrate the beauty of our multicultural world.",
    img: "/culture.png",
    catSlug: "culture",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Eco-Friendly Fashion Choices for a Greener Planet",
    excerpt:
      "Discover sustainable fashion options and make choices that benefit both you and the environment.",
    desc: "Make a positive impact on the planet while looking stylish with eco-friendly fashion choices. This post explores sustainable fashion options that are kind to the environment. Learn about ethical brands, eco-conscious materials, and responsible fashion practices. By making thoughtful choices, you can reduce your carbon footprint and contribute to a greener planet. Join the sustainable fashion movement and showcase your style while caring for the Earth.",
    img: "/fashion.png",
    catSlug: "fashion",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Building Scalable Web Apps with React",
    excerpt:
      "Learn best practices for building scalable web applications using React and other modern tools.",
    desc: "Take your web development skills to the next level with this in-depth guide to building scalable web applications. We cover the best practices for using React, a popular JavaScript library for creating user interfaces. Explore modern tools and techniques for building robust and scalable apps. Whether you're a beginner or an experienced developer, this post offers valuable insights to help you create high-performance web applications.",
    img: "/coding.png",
    catSlug: "coding",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Adventurous Travel Ideas: Off the Beaten Path",
    excerpt:
      "Plan an unforgettable adventure with these off-the-beaten-path travel destinations and activities.",
    desc: "Step off the well-trodden path and embark on an extraordinary adventure with our guide to off-the-beaten-path travel ideas. Explore hidden gems, remote landscapes, and unique cultural experiences. From thrilling outdoor adventures to serene getaways, these destinations offer a break from the ordinary. Prepare to create unforgettable memories and discover the world's hidden treasures. Your next adventure awaits!",
    img: "/travel.png",
    catSlug: "travel",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Taste the World: International Food Recipes",
    excerpt:
      "Embark on a culinary journey with international recipes that bring the flavors of the world to your kitchen.",
    desc: "Satisfy your culinary wanderlust with international food recipes that bring global flavors to your kitchen. Travel the world through your taste buds and explore diverse cuisines from various regions. From spicy curries to savory pastas, our recipes will take you on a delicious journey. Get ready to cook up a storm and savor the rich and diverse flavors of international cuisine.",
    img: "/food.png",
    catSlug: "food",
    userEmail: "isinesam@gmail.com",
  },
];

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .substring(0, 50);
};

export const formatDate = (timeString, format) => {
  const date = new Date(timeString);
  if (format === "date") {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  } else if (format === "time") {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  } else {
    return "Invalid format";
  }
};
