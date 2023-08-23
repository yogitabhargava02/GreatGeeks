const dummyEbooks = [
  {
    id: 1,
    title: "The Adventure Begins",
    image:
      "https://www.junkybooks.com/administrator/bookimages/64d00f578e3629.83702370.jpg",
    author: "Jane Smith",
    published_date: "2023-03-15",
    description:
      "Join the thrilling journey of a young hero as they set out on a quest to save their kingdom from darkness.",
    about_the_author:
      "Jane Smith is an avid fantasy writer with a passion for world-building and character-driven narratives.",
    price: 9.99,
    pages: 320,
    rating: 4.5,
    reviews: [
      {
        user: "reader123",
        rating: 5,
        comment: "An epic tale that kept me hooked from start to finish!",
      },
      {
        user: "booklover456",
        rating: 4,
        comment: "Great book, but the pacing was a bit slow in the middle.",
      },
    ],
  },
  {
    id: 2,
    title: "Mystery at Willow Manor",
    image:
      "https://www.junkybooks.com/administrator/bookimages/64e230af889140.02182710.jpg",
    author: "David Johnson",
    published_date: "2023-06-10",
    description:
      "Unravel the secrets of Willow Manor in this gripping mystery novel filled with twists and turns.",
    about_the_author:
      "David Johnson is an accomplished mystery writer, known for his intricate plots and memorable characters.",
    price: 12.99,
    pages: 420,
    rating: 4.8,
    reviews: [
      {
        user: "sleuthyreader",
        rating: 5,
        comment:
          "Kept me guessing until the very end. A must-read for mystery enthusiasts!",
      },
      {
        user: "bookdetective",
        rating: 4.5,
        comment: "Enjoyed the book, but some clues were a bit too obvious.",
      },
    ],
  },
  {
    id: 3,
    title: "Science Unleashed",
    image:
      "https://www.junkybooks.com/administrator/bookimages/6483a6a3d6e865.99866211.jpg",
    author: "Michael Anderson",
    published_date: "2023-01-22",
    description:
      "Embark on a journey through the fascinating world of scientific discoveries that changed the course of history.",
    about_the_author:
      "Michael Anderson is a renowned scientist and educator, passionate about making complex concepts accessible to everyone.",
    price: 14.99,
    pages: 280,
    rating: 4.6,
    reviews: [
      {
        user: "sciencegeek",
        rating: 5,
        comment: "Mind-blowing revelations presented in a captivating way!",
      },
      {
        user: "curiouslearner",
        rating: 4,
        comment: "A solid book, but I was hoping for more recent discoveries.",
      },
    ],
  },
];
export default dummyEbooks;
