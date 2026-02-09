import { asset } from '../utils/assetPath';

const milestones = [
  {
    id: 1,
    title: "Where It All Began",
    caption: "The day our paths crossed and everything changed...",
    photo: asset('photos/milestone-1.jpg'),
    icon: "\u2615",
    interaction: "flip",
    position: { x: 250, y: 180 },
  },
  {
    id: 2,
    title: "First Sparks",
    caption: "When I knew there was something special about you...",
    photo: asset('photos/milestone-2.jpg'),
    icon: "\u2728",
    interaction: "fade",
    position: { x: 750, y: 480 },
  },
  {
    id: 3,
    title: "Our First Adventure",
    caption: "Exploring the world together for the first time...",
    photo: asset('photos/milestone-3.jpg'),
    icon: "\u2708\uFE0F",
    interaction: "flip",
    position: { x: 250, y: 780 },
  },
  {
    id: 4,
    title: "That Unforgettable Day",
    caption: "A moment that's forever etched in my heart...",
    photo: asset('photos/milestone-4.jpg'),
    icon: "\uD83D\uDCF8",
    interaction: "fade",
    position: { x: 750, y: 1080 },
  },
  {
    id: 5,
    title: "Through Thick & Thin",
    caption: "We proved that together, we can handle anything...",
    photo: asset('photos/milestone-5.jpg'),
    icon: "\uD83D\uDCAA",
    interaction: "flip",
    position: { x: 250, y: 1380 },
  },
  {
    id: 6,
    title: "Our Happy Place",
    caption: "Where we feel most alive, most us...",
    photo: asset('photos/milestone-6.jpg'),
    icon: "\uD83C\uDFB5",
    interaction: "fade",
    position: { x: 750, y: 1680 },
  },
  {
    id: 7,
    title: "Just the Beginning",
    caption: "Every day with you is my favorite day...",
    photo: asset('photos/milestone-7.jpg'),
    icon: "\u2764\uFE0F",
    interaction: "flip",
    position: { x: 500, y: 1980 },
  },
];

export default milestones;
