export const popularCategories = [
  {
    imgSrc: "/style.png",
    name: "style",
  },
  {
    imgSrc: "/fashion.png",
    name: "fashion",
  },
  {
    imgSrc: "/food.png",
    name: "food",
  },
  {
    imgSrc: "/travel.png",
    name: "travel",
  },
  {
    imgSrc: "/culture.png",
    name: "culture",
  },
  {
    imgSrc: "/coding.png",
    name: "coding",
  },
];

export const blogPosts = [
  {
    category: "Travel",
    title: "Exploring the Wonders of Machu Picchu",
    author: "Alice Johnson",
    date: "2023-10-15",
    imageSrc: "/p1.jpeg",
  },
  {
    category: "Coding",
    title: "Mastering React Hooks for State Management",
    author: "Bob Smith",
    date: "2023-09-28",
    imageSrc: "/p1.jpeg",
  },
  {
    category: "Food",
    title: "A Culinary Journey: Tasting Authentic Thai Cuisine",
    author: "Ella Davis",
    date: "2023-09-10",
    imageSrc: "/p1.jpeg",
  },
  {
    category: "Style",
    title: "Fashion Trends: What's Hot in 2023",
    author: "David Lee",
    date: "2023-08-22",
    imageSrc: "/p1.jpeg",
  },
  {
    category: "Fashion",
    title: "Red Carpet Glamour: Celebrities and Their Styles",
    author: "Grace Turner",
    date: "2023-08-05",
    imageSrc: "/p1.jpeg",
  },
];

export const getCategoryBackgroundColor = (name) => {
  switch (name) {
    case "style":
      return "bg-[#57c4ff9A]"; // Adjusted opacity to 60%
    case "fashion":
      return "bg-[#da85c79A]"; // Adjusted opacity to 60%
    case "food":
      return "bg-[#7fb8819A]"; // Adjusted opacity to 60%
    case "travel":
      return "bg-[#ff79579A]"; // Adjusted opacity to 60%
    case "culture":
      return "bg-[#ffb84f9A]"; // Adjusted opacity to 60%
    case "coding":
      return "bg-[#5e4fffaA]"; // Adjusted opacity to 70%
    default:
      return "bg-gray-500"; // Default color
  }
};
