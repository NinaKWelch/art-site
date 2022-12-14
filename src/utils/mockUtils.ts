export const categories = [
  {
    id: 10,
    name: 'painting',
    nameUrl: 'painting',
  },
  {
    id: 20,
    name: 'drawing',
    nameUrl: 'drawing',
  },
  {
    id: 30,
    name: 'sculpture',
    nameUrl: 'sculpture',
  },
]

export const allArtists = [
  {
    id: 1,
    firstName: 'john',
    lastName: 'doe',
    email: 'john.doe@art-site.com',
    password: 'password',
    nameUrl: 'john-doe',
    portfolio: [
      {
        id: 100,
        category: {
          id: 10,
          name: 'painting',
        },
        name: 'painting 1000',
        image: 'painting 1000 img',
        description: 'painting 1000 description',
      },
      {
        id: 200,
        category: {
          id: 20,
          name: 'drawing',
        },
        name: 'drawing 2000',
        image: 'drawing 2000 img',
        description: 'drawing 2000 description',
      },
    ]
  },
  {
    id: 2,
    firstName: 'mary',
    lastName: 'smith',
    email: 'mary.smith@art-site.com',
    password: 'password',
    nameUrl: 'mary-smith',
  },
  {
    id: 3,
    firstName: 'kate',
    lastName: 'brown',
    nameUrl: 'kate-brown',
    email: 'kate.brown@art-site.com',
    password: 'password',
    portfolio: [
      {
        id: 500,
        category: {
          id: 30,
          name: 'sculpture',
        },
        name: 'sculpture 50001',
        image: 'sculpture 5000 img',
        description: 'sculpture 5000 description',
      },
    ]
  }
]