import type { CommentsProducts } from '../types/myProducts';

export function fetchComments(): Promise<CommentsProducts[]> {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    name: 'Juan Perez',
                    comment: 'Excelente producto, lo recomiendo',
                    clientImage: 'https://images.unsplash.com/profile-1441298803695-accd94000cac',
                    clientName: 'Juan Alberto',
                    date: '2021-10-10',
                    rate: 4
                },
                {
                    name: 'Juan Perez',
                    comment: 'Excelente producto, lo recomiendo',
                    clientImage: 'https://images.unsplash.com/profile-1441298803695-accd94000cac',
                    clientName: 'Juan Alberto',
                    date: '2021-10-10',
                    rate: 4
                },
                {
                    name: 'Juan Perez',
                    comment: 'Excelente producto, lo recomiendo',
                    clientImage: 'https://images.unsplash.com/profile-1441298803695-accd94000cac',
                    clientName: 'Juan Alberto',
                    date: '2021-10-10',
                    rate: 4
                },
                {
                    name: 'Juan Perez',
                    comment: 'Excelente producto, lo recomiendo',
                    clientImage: 'https://images.unsplash.com/profile-1441298803695-accd94000cac',
                    clientName: 'Juan Alberto',
                    date: '2021-10-10',
                    rate: 4
                },
                {
                    name: 'Juan Perez',
                    comment: 'Excelente producto, lo recomiendo',
                    clientImage: 'https://images.unsplash.com/profile-1441298803695-accd94000cac',
                    clientName: 'Juan Alberto',
                    date: '2021-10-10',
                    rate: 4
                },
                {
                    name: 'Juan Perez',
                    comment: 'Excelente producto, lo recomiendo',
                    clientImage: 'https://images.unsplash.com/profile-1441298803695-accd94000cac',
                    clientName: 'Juan Alberto',
                    date: '2021-10-10',
                    rate: 4
                }
              ])
        }, 100);
    });
}   