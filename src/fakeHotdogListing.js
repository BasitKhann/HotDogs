import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpeg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";
import image7 from "./images/image7.jpg";
import image8 from "./images/image8.jpg";
import image9 from "./images/image9.jpg";
import image10 from "./images/image10.jpg";

const hotdogs = [
  {
    name: "Classic Hotdog",
    location: "New York, NY",
    rating: 4.5,
    image: image1,
  },
  {
    name: "Chili Cheese Hotdog",
    location: "Los Angeles, CA",
    rating: 4.8,
    image: image2,
  },
  {
    name: "Jalapeno Hotdog",
    location: "Chicago, IL",
    rating: 4.2,
    image: image3,
  },
  {
    name: "Veggie Hotdog",
    location: "San Francisco, CA",
    rating: 3.9,
    image: image4,
  },
  {
    name: "Bacon Wrapped Hotdog",
    location: "Dallas, TX",
    rating: 4.7,
    image: image5,
  },
  {
    name: "Kraut Hotdog",
    location: "Miami, FL",
    rating: 4.3,
    image: image6,
  },
  {
    name: "Chicago-style Hotdog",
    location: "Chicago, IL",
    rating: 4.9,
    image: image7,
  },
  {
    name: "Corn Dog",
    location: "Kansas City, MO",
    rating: 4.1,
    image: image8,
  },
  {
    name: "Footlong Hotdog",
    location: "New York, NY",
    rating: 4.6,
    image: image9,
  },
  {
    name: "Giant Hotdog",
    location: "Las Vegas, NV",
    rating: 4.4,
    image: image10,
  },
];

export default function getListing() {
  return hotdogs;
}
