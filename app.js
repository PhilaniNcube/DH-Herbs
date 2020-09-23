gsap.registerPlugin(ScrollTrigger);

const herbs = [
  {
    id: 1,
    name: 'asparagus',
    benefits:
      "Crisp springtime asparagus can be used in so many tasty ways and for every meal from breakfast to dinner. Asparagus is a green vegetable that's easily recognizable for its long, pointy spears, which are commonly grilled, steamed, or roasted. It's known as a springtime vegetable.",
    food: ['Soup', 'stir fry', 'quiche', 'shrimp'],
    img: '/img/asparagus-2.jpg',
  },
  {
    id: 2,
    name: 'basil',
    benefits:
      'Basil is an herb in the mint family that is essential in Italian cooking, although it is also used in a variety of other types of cuisines including Thai, Indonesian, and Vietnamese. It is known for being the main ingredient in traditional pesto and is also a favorite seasoning in tomato-based pasta sauces.',
    food: ['Pasta', 'Tomato Soup', 'Sandwiches', 'Chicken'],
    img: '/img/basil-1.jpg',
  },
  {
    id: 3,
    name: 'comfrey',
    benefits:
      'Comfrey has been cultivated as a green vegetable and has been used as an herbal medicine for more than 2,000 years.  In Western Europe, comfrey has been used topically for treating inflammatory disorders such as arthritis, gout, and thrombophlebitis, and internally for treating diarrhea.',
    food: [],
    img: '/img/comfrey-1.jpg',
  },
  {
    id: 4,
    name: 'common rue',
    benefits:
      'While little known, growing rue herb in the garden can be helpful to a gardener in a number of ways. Its strong smell is a repellent to many creatures, including dogs, cats and Japanese beetles. Dried Rue leaves can be used as an insect repellent in the house.',
    food: [],
    img: '/img/common-rue-1.jpg',
  },
  {
    id: 5,
    name: 'dill',
    benefits:
      'Dill immediately brings to mind dill pickles and potato salad today, but it has had a place for centuries in cuisines throughout Europe and Asia. Some chemicals contained in dill seed might help relax muscles. Other chemicals might be able to fight bacteria and increase urine production like a water pill.',
    food: ['Potato salad', 'salmon', 'chicken'],
    img: '/img/dill-2.jpg',
  },
  {
    id: 6,
    name: 'fennel',
    benefits:
      'Fennel is taken oraly for various digestive problems including heartburn, intestinal gas, bloating, loss of appetite, and colic in infants among others. In other manufacturing processes, fennel oil is used as a flavoring agent in certain laxatives, and as a fragrance component in soaps and cosmetics.',
    food: ['Pasta', 'Potato Soup', 'Lamb'],
    img: '/img/fennel-1.jpg',
  },
  {
    id: 7,
    name: 'garlic',
    benefits:
      "Garlic's intense and unique flavor and aroma make it a mainstay of cuisines around the world, nearly indispensable in just about every form of Asian, European, African, Latin American, and North American cooking. It is known to contain antioxidants that can help protect against cell damage and aging.",
    food: ['Bread', 'Pork', 'Shrimp', 'Steak', 'Chicken'],
    img: '/img/garlic-3.jpg',
  },
  {
    id: 8,
    name: 'ginger',
    benefits:
      'Certain chemical compounds in fresh ginger have antibacterial properties. Ginger helps if you’re trying to ease a queasy stomach, especially during pregnancy. It also helps reduce swelling and ease symptoms of arthritis. In the kitchen ginger is used to add flavour to drinks, tea, cocktails and meats & stews.',
    food: ['Cookies/Biscuits', 'Chicken', 'Pork Chops', 'Sushi'],
    img: '/img/ginger-1.jpg',
  },
  {
    id: 9,
    name: 'lavender',
    benefits:
      'Lavender is renowned as a culinary herb for its clean, distinctive perfume and matching floral, ever-so-slightly-minty flavor. Lavender oil is believed to have antiseptic and anti-inflammatory properties, which can help to heal minor burns and bug bites. Research suggests that it may be useful for treating anxiety, insomnia, depression, and restlessness.',
    food: ['Lavender Lemonade', 'Cocktails', 'Fish'],
    img: '/img/lavender-2.jpg',
  },
  {
    id: 10,
    name: 'oregano',
    benefits:
      'Oregano has been a common ingredient in Spanish, Mexican, and Italian dishes as a spice and flavoring agent for hundreds of years. Its initial purpose was as a warming digestive and circulatory stimulant. It has been used in perfumery for its volatile oil contents, especially in scenting soaps.',
    food: ['Bread', 'Butter', 'Pork Loin', 'Steak'],
    img: '/img/oregano-1.jpg',
  },
  {
    id: 11,
    name: 'parsley',
    benefits:
      'Parsley, in addition to being a source of certain vitamins and minerals, has been used traditionally for widespread uses. Because of its light scent and fresh taste, parsley can be used in anything from soups to sauces to vegetables. As a garnish, parsley can be chopped and sprinkled in soups, hummus, or mixed with ground meat.',
    food: ['Lamb stew', 'grilled steak', 'fish', 'bread', 'chicken'],
    img: '/img/parsley.jpg',
  },
  {
    id: 12,
    name: 'rosemary',
    benefits:
      'Rosemary is a fragrant evergreen herb native to the Mediterranean. The herb not only tastes good in culinary dishes, such as rosemary chicken and lamb, but it is also a good source of iron, calcium, and vitamin B-6. Possible health benefits include improved concentration, digestion, and brain aging.',
    food: ['Roast Chicken', 'Pork Chops', 'Tea'],
    img: '/img/rosemary-2.jpg',
  },
  {
    id: 13,
    name: 'thyme',
    benefits:
      'Thyme extracts and thymol have been used in cough mixtures and mouthwashes, as well as for skin conditions, especially fungal infections. Thyme is an extremely fragrant herb with thin, woody stems and small, pungent leaves. Available in both fresh or dried, this herb is easily found in most supermarkets year-round.',
    food: ['Roasted Vegetables', 'Pork Tenderloin', 'Fish'],
    img: '/img/thyme-1.jpg',
  },
  {
    id: 14,
    name: 'yarrow',
    benefits:
      'Yarrow leaves have been used for tea, and young leaves and flowers have been used in salads. Infusions of yarrow have served as cosmetic cleansers and medicines. Yarrow has been used to induce sweating and to stop wound bleeding.',
    food: [],
    img: '/img/yarrow-2.jpg',
  },
];

let tl = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

tl.from('#showcase', { opacity: 0, duration: 2, ease: 'power2.inOut' });

gsap.from('.card', {
  opacity: 0,
  x: -400,

  scrollTrigger: {
    trigger: '.cards',
    scrub: true,
    start: 'top bottom',
    end: 'bottom bottom',
  },
  stagger: 0.2,
});
