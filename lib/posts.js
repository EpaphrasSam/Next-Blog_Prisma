export const postsData = [
  {
    title: "10 Fashion Trends for This Season",
    desc: "Explore the latest fashion trends and make a style statement with these trendy outfits and accessories.",
    img: "/fashion.png",
    catSlug: "fashion",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Mastering JavaScript Promises",
    desc: "Learn how to work with JavaScript promises and handle asynchronous operations like a pro.",
    img: "/coding.png",
    catSlug: "coding",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Escape to Paradise: Top Travel Destinations",
    desc: "Discover the most beautiful travel destinations around the world and plan your dream vacation.",
    img: "/travel.png",
    catSlug: "travel",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Delicious Food Recipes for Food Lovers",
    desc: "Indulge in mouthwatering recipes that will satisfy your cravings and tickle your taste buds.",
    img: "/food.png",
    catSlug: "food",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Fashion Tips: Dressing with Confidence",
    desc: "Find out how to boost your self-esteem by dressing confidently and expressing your unique style.",
    img: "/style.png",
    catSlug: "style",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Exploring Cultural Diversity: Traditions and Festivals",
    desc: "Dive into the rich tapestry of world cultures and learn about unique traditions and festivals.",
    img: "/culture.png",
    catSlug: "culture",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Eco-Friendly Fashion Choices for a Greener Planet",
    desc: "Discover sustainable fashion options and make choices that benefit both you and the environment.",
    img: "/fashion.png",
    catSlug: "fashion",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Building Scalable Web Apps with React",
    desc: "Learn best practices for building scalable web applications using React and other modern tools.",
    img: "/coding.png",
    catSlug: "coding",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Adventurous Travel Ideas: Off the Beaten Path",
    desc: "Plan an unforgettable adventure with these off-the-beaten-path travel destinations and activities.",
    img: "/travel.png",
    catSlug: "travel",
    userEmail: "isinesam@gmail.com",
  },
  {
    title: "Taste the World: International Food Recipes",
    desc: "Embark on a culinary journey with international recipes that bring the flavors of the world to your kitchen.",
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
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  } else if (format === "time") {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return date.toLocaleTimeString("en-US", options);
  } else {
    return "Invalid format";
  }
};
