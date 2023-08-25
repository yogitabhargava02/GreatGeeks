const dummyEbooks = [
  {
    id: 1,
    title: "The Adventure Begins",
    type:"Literature",
    image:
      "https://www.junkybooks.com/administrator/bookimages/64d00f578e3629.83702370.jpg",
    author: "Jane Smith",
    published_date: "Sept 2023",
    description:
      "Join the thrilling journey of a young hero as they set out on a quest to save their kingdom from darkness.loremEiusmod ullamco adipisicing aliqua sit est ad nostrud minim incididunt consectetur tempor eiusmod culpa. Laboris velit enim elit tempor deserunt sunt reprehenderit dolore labore laborum. Aute excepteur aute aute amet esse nisi laboris laborum ullamco. Deserunt Reprehenderit aute ex consequat eiusmod do ea elit culpa nulla. Amet ad esse Lorem non. Fugiat magna aliquip quis fugiat duis sit esse Lorem sit anim do fugiat mollit. Aliqua commodo pariatur quis voluptate velit proident cillum excepteur commodo ipsum voluptate magna. Reprehenderit nisi nostrud est qui duis deserunt cillum magna duis commodo cupidatat do. Nulla eiusmod ea nisi quis do ad eiusmod quis labore laboris fugiat.minim consequat mollit consequat laborum ipsum esse. ",
    about_the_author:
      "Jane Smith is an avid fantasy writer with a passion for world-building and character-driven narratives.Excepteur sunt eiusmod labore quis amet ipsum laborum irure nisi proident reprehenderit. Qui qui enim est ea do commodo eu. Fugiat adipisicing ad sunt amet tempor elit incididunt ad quis aliquip nisi. Minim mollit minim aute incididunt id. Duis nulla quis aliqua dolore occaecat consectetur dolor excepteur mollit mollit non. Enim et duis tempor cillum nisi culpa nostrud adipisicing ullamco dolore commodo deserunt velit irure. Eu ipsum fugiat reprehenderit proident magna id voluptate duis velit tempor ut occaecat.",
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
    type:"Motivation",
    image:
      "https://www.junkybooks.com/administrator/bookimages/64e230af889140.02182710.jpg",
    author: "David Johnson",
    published_date: "Sept 2023",
    description:
      "Unravel the secrets of Willow Manor in this gripping mystery novel filled with twists and turns.loremProident voluptate aliquip deserunt anim fugiat. Eu mollit aute laboris laborum Lorem Lorem magna exercitation. Consectetur commodo sint ut ipsum. Laboris reprehenderit do nulla non nostrud aliqua dolor labore nisi ipsum voluptate commodo ad cupidatat.Non irure aute excepteur qui consequat irure dolor. Cupidatat aliquip amet sint nisi. Cillum sit excepteur laboris ut velit laborum aliquip pariatur veniam excepteur eiusmod sit eiusmod. Nisi incididunt nostrud elit do duis sit.",
    about_the_author:
      "David Johnson is an accomplished mystery writer, known for his intricate plots and memorable characters.loremProident amet duis occaecat dolore non fugiat deserunt in pariatur id aliqua ipsum amet. Laborum magna est sint laboris. Adipisicing ea aliqua fugiat est eu ex adipisicing officia ea consectetur commodo culpa irure. Officia nulla Lorem veniam consequat duis fugiat ad consectetur pariatur mollit. Proident proident aliqua deserunt ipsum culpa in sint elit eiusmod nulla duis. Nulla ex fugiat velit excepteur reprehenderit velit cupidatat nisi ut nulla qui ut ex.",
    price: 12.99,
    pages: 420,
    rating: 4.8,
    reviews: [
      {
        user: "sleuthyreader",
        rating: 5,
        comment:
          "Kept me guessing until the very end. A must-read for mystery enthusiasts!Dolor consectetur cillum pariatur do tempor ipsum duis Lorem veniam enim do do. Ut in culpa reprehenderit aliquip. Pariatur magna voluptate do laborum aliquip. Non cupidatat do sunt anim consequat adipisicing ad. Enim est esse cillum do non consectetur consequat cillum reprehenderit. Amet est duis dolore ea cupidatat eu ex exercitation.",
      },
      {
        user: "bookdetective",
        rating: 4.5,
        comment: "Enjoyed the book, but some clues were a bit too obvious.Sunt anim ipsum culpa esse laborum nostrud dolore ullamco consequat. Excepteur commodo excepteur nulla laboris aliqua ex. Et et anim incididunt incididunt in non ullamco aliqua esse.",
      },
    ],
  },




  {
    id: 4,
    title: "The Art of Cooking",
    type: "Cooking",
    image:
    "https://www.junkybooks.com/administrator/bookimages/6483a6a3d6e865.99866211.jpg",
    author: "Emily Davis",
    published_date: "Oct 2023",
    description: "Explore the culinary world with delicious recipes and cooking techniques.",
    about_the_author: "Emily Davis is a professional chef with a passion for sharing her cooking expertise.",
    price: 19.99,
    pages: 200,
    rating: 4.9,
    reviews: [
      {
        user: "foodlover",
        rating: 5,
        comment: "Absolutely delightful! The recipes are easy to follow and taste amazing.",
      },
      {
        user: "culinaryartist",
        rating: 4.5,
        comment: "Great book for both beginners and experienced cooks.",
      },
    ],
  },
  {
    id: 5,
    title: "Into the Wilderness",
    type: "Adventure",
    image:
    "https://www.junkybooks.com/administrator/bookimages/6483a6a3d6e865.99866211.jpg",
    author: "Alex Turner",
    published_date: "Oct 2023",
    description: "Embark on a thrilling journey through uncharted territories and untamed nature.",
    about_the_author: "Alex Turner is an explorer and storyteller, known for his daring expeditions.",
    price: 10.99,
    pages: 340,
    rating: 4.7,
    reviews: [
      {
        user: "adventureseeker",
        rating: 5,
        comment: "Captivating narrative that transports you to the heart of the wilderness.",
      },
      {
        user: "wildnature",
        rating: 4,
        comment: "Enjoyable read, but some parts felt a bit rushed.",
      },
    ],
  },









  {
    id: 3,
    title: "Science Unleashed",
    type:"Fiction and Literature",
    image:
      "https://www.junkybooks.com/administrator/bookimages/6483a6a3d6e865.99866211.jpg",
    author: "Michael Anderson",
    published_date: "Sept 2023",
    description:
      "Embark on a journey through the fascinating world of scientific discoveries that changed the course of history.loremIrure pariatur elit elit commodo laborum Lorem cillum ex. Anim amet cupidatat officia qui ut incididunt minim voluptate ad officia laboris nisi velit. Incididunt eu ad nostrud et excepteur anim exercitation aliqua elit. Ullamco irure anim anim cillum sint nulla tempor cupidatat mollit nisi aliqua consequat aute. Quis amet reprehenderit in minim eu. Do ullamco ad est ullamco est nulla. Mollit sunt aute reprehenderit occaecat labore adipisicing in cillum nisi pariatur ipsum ad.",
    about_the_author:
      "Michael Anderson is a renowned scientist and educator, passionate about making complex concepts accessible to everyone.Labore aliquip aliquip ad ut consequat aliquip duis non. Anim amet irure quis cillum tempor elit fugiat eiusmod adipisicing irure nulla anim. Voluptate deserunt exercitation labore nostrud non deserunt pariatur nulla ad deserunt.loremAnim fugiat laborum proident ipsum dolor et dolore esse in est sit do. Aute non non laboris ut. Non amet reprehenderit tempor reprehenderit do.",
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
