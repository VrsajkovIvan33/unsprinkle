const data = [
  {
    id: 'a',
    src: '/images/vincent-van-zalinge-bird.jpg',
    srcSets: {
      jpg: `
        /images/vincent-van-zalinge-bird.jpg 1x,
        /images/vincent-van-zalinge-bird@2x.jpg 2x,
        /images/vincent-van-zalinge-bird@3x.jpg 3x
      `,
      avif: `
        /images/vincent-van-zalinge-bird.avif 1x,
        /images/vincent-van-zalinge-bird@2x.avif 2x,
        /images/vincent-van-zalinge-bird@3x.avif 3x
      `,
    },
    alt: 'A tiny shrewd turquoise-and-amber bird',
    tags: [
      'bird',
      'blurred background',
      'wildlife',
      'animal in its natural habitat',
    ],
  },
  {
    id: 'b',
    src: '/images/alexandru-rotariu-dog.jpg',
    srcSets: {
      jpg: `
        /images/alexandru-rotariu-dog.jpg 1x,
        /images/alexandru-rotariu-dog@2x.jpg 2x,
        /images/alexandru-rotariu-dog@3x.jpg 3x
      `,
      avif: `
        /images/alexandru-rotariu-dog.avif 1x,
        /images/alexandru-rotariu-dog@2x.avif 2x,
        /images/alexandru-rotariu-dog@3x.avif 3x
      `,
    },
    alt: 'A serious-looking grey dog with cool glacier eyes',
    tags: ['dog', 'HD'],
  },
  {
    id: 'c',
    src: '/images/scott-walsh-fox.jpg',
    srcSets: {
      jpg: `
        /images/scott-walsh-fox.jpg 1x,
        /images/scott-walsh-fox@2x.jpg 2x,
        /images/scott-walsh-fox@3x.jpg 3x 
      `,
      avif: `
        /images/scott-walsh-fox.avif 1x,
        /images/scott-walsh-fox@2x.avif 2x,
        /images/scott-walsh-fox@3x.avif 3x
      `,
    },
    alt: 'A happy-looking cute wild fox in nature, near some pink flowers',
    tags: ['fox', 'flowers'],
  },
  {
    id: 'd',
    src: '/images/andy-holmes-giraffe.jpg',
    srcSets: {
      jpg: `
        /images/andy-holmes-giraffe.jpg 1x,
        /images/andy-holmes-giraffe@2x.jpg 2x,
        /images/andy-holmes-giraffe@3x.jpg 3x
      `,
      avifjpg: `
        /images/andy-holmes-giraffe.avif 1x,
        /images/andy-holmes-giraffe@2x.avif 2x,
        /images/andy-holmes-giraffe@3x.avif 3x
      `,
    },
    alt: 'A giraffe sticking its black tongue out',
    tags: ['giraffe', 'dramatic'],
  },
  {
    id: 'e',
    src: '/images/karsten-winegeart-dog.jpg',
    srcSets: {
      jpg: `
        /images/karsten-winegeart-dog.jpg 1x, 
        /images/karsten-winegeart-dog@2x.jpg 2x,
        /images/karsten-winegeart-dog@3x.jpg 3x
      `,
      avif: `
        /images/karsten-winegeart-dog.avif 1x,
        /images/karsten-winegeart-dog@2x.avif 2x,
        /images/karsten-winegeart-dog@3x.avif 3x
      `,
    },
    alt: 'A small dog wearing a golden "Champions" hoodie',
    tags: ['dog', 'cute', 'animal wearing human clothes'],
  },
  {
    id: 'f',
    src: '/images/marko-blazevic-cat.jpg',
    srcSets: {
      jpg: `
        /images/marko-blazevic-cat.jpg 1x,
        /images/marko-blazevic-cat@2x.jpg 2x,
        /images/marko-blazevic-cat@3x.jpg 3x
      `,
      avif: `
        /images/marko-blazevic-cat.avif 1x,
        /images/marko-blazevic-cat@2x.avif 2x,
        /images/marko-blazevic-cat@3x.javif 3x
      `,
    },
    alt: 'A small kitten standing on its back legs, reaching up towards the camera',
    tags: ['kitten', 'cat', '#cute'],
  },
  {
    id: 'g',
    src: '/images/mark-stoop-lizard.jpg',
    srcSets: {
      jpg: `
        /images/mark-stoop-lizard.jpg 1x,
        /images/mark-stoop-lizard@2x.jpg 2x,
        /images/mark-stoop-lizard@3x.jpg 3x
      `,
      avif: `
        /images/mark-stoop-lizard.avif 1x,
        /images/mark-stoop-lizard@2x.avif 2x,
        /images/mark-stoop-lizard@3x.avif 3x
      `
    },
    alt: 'A relaxed green lizard, sitting on a wooden beam',
    tags: [
      'lizard',
      'world-famous insurance salesman from the commercials',
    ],
  },
  {
    id: 'h',
    src: '/images/geran-de-klerk-squirrel.jpg',
    srcSets: {
      jpg: `
        /images/geran-de-klerk-squirrel.jpg 1x,
        /images/geran-de-klerk-squirrel@2x.jpg 2x,
        /images/geran-de-klerk-squirrel@3x.jpg 3x
      `,
      avif: `
        /images/geran-de-klerk-squirrel.avif 1x,
        /images/geran-de-klerk-squirrel@2x.avif 2x,
        /images/geran-de-klerk-squirrel@3x.avif 3x
      `,
    },
    alt: 'A fuzzy squirrel, highlighted in a dark backdrop',
    tags: ['squirrel', 'animal', 'fuzzy'],
  },
  {
    id: 'i',
    src: '/images/wexor-tmg-turtle.jpg',
    srcSets: {
      jpg: `
        /images/wexor-tmg-turtle.jpg 1,
        /images/wexor-tmg-turtle@2x.jpg 2x,
        /images/wexor-tmg-turtle@3x.jpg 3x
      `,
      avif: `
        /images/wexor-tmg-turtle.avif 1,
        /images/wexor-tmg-turtle@2x.avif 2x,
        /images/wexor-tmg-turtle@3x.avif 3x
      `,
    },
    alt: 'A large tropical turtle swimming in water',
    tags: ['turtle', 'ocean', 'flippers'],
  },
];

export default data;
