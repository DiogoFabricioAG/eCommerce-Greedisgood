import type { clientFindRequired } from '@/types/myClient';

export function fetchClients(): Promise<clientFindRequired[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          firstname: 'Juan',
          lastname: 'Alberto',
          distance: 10,
          valoration: 1,
          nArticles: 5,
          joinAt: new Date('2021-10-10'),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
          image: 'https://images.unsplash.com/profile-1441298803695-accd94000cac'
        },
        {
          id: 2,
          firstname: 'Mario',
          lastname: 'Solis',
          distance: 10,
          valoration: 2,
          nArticles: 5,
          joinAt: new Date('2021-10-10'),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
          image: 'https://unavatar.io/midudev'
        },
        {
          id: 3,
          firstname: 'Raul',
          lastname: 'Tomatoso',
          distance: 10,
          valoration: 4,
          nArticles: 5,
          joinAt: new Date('2021-10-10'),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
          image: 'https://unavatar.io/DFAGAKA'
        },
        {
          id: 4,
          firstname: 'Pedro',
          lastname: 'Del Clavo',
          distance: 10,
          valoration: 3,
          nArticles: 5,
          joinAt: new Date('2021-10-10'),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
          image: 'https://unavatar.io/pedro'
        },
        {
          id: 5,
          firstname: 'Armando',
          lastname: 'Puertas',
          distance: 10,
          valoration: 5,
          nArticles: 5,
          joinAt: new Date('2023-10-10'),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
          image: 'https://unavatar.io/java'
        },
        {
          id: 6,
          firstname: 'Esteban',
          lastname: 'Quito',
          distance: 100,
          valoration: 5,
          nArticles: 100,
          joinAt: new Date('2021-10-10'),
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
          image: 'https://unavatar.io/messi'
        },
      ]);
    }, 500);
  });
}
