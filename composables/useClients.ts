import { ref, computed, watch } from 'vue';
import type { clientFindRequired } from '@/types/myClient';
import { transformDate, fullName } from '@/helpers/dateUtils';
import { useFilters } from '@/composables/useFilters';

export function useClients() {
  const allClientsData = ref<clientFindRequired[]>([
    {
      id: 1,
      firstname: 'Nombre del cliente',
      lastname: 'Apellido del cliente',
      distance: 10,
      valoration: 1,
      nArticles: 5,
      joinAt: new Date('2021-10-10'),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://images.unsplash.com/profile-1441298803695-accd94000cac'
    },
    {
      id: 2,
      firstname: 'Nombre del cliente',
      lastname: 'Apellido del cliente',
      distance: 10,
      valoration: 2,
      nArticles: 5,
      joinAt: new Date('2021-10-10'),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://unavatar.io/midudev'
    },
    {
      id: 3,
      firstname: 'Nombre del cliente',
      lastname : 'Apellido del cliente',
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
      lastname : 'Apellido del cliente',
      distance: 10,
      valoration: 3,
      nArticles: 5,
      joinAt: new Date('2021-10-10'),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://unavatar.io/pedro'
    },
    {
      id: 5,
      firstname: 'Nombre del cliente',
      lastname : 'Apellido del cliente',
      distance: 10,
      valoration: 5,
      nArticles: 5,
      joinAt: new Date('2023-10-10'),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://unavatar.io/java'
    },
    {
      id: 6,
      firstname: 'Nombre del cliente',
      lastname : 'Apellido del cliente',
      distance: 100,
      valoration: 5,
      nArticles: 100,
      joinAt: new Date('2021-10-10'),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://unavatar.io/messi'
    },
  ]);
  const { valorationFilter, articlesFilter, distanceFilter } = useFilters();

  watch([valorationFilter, articlesFilter, distanceFilter], () => {
    page.value = 1;
  });

  const clientsData = computed(() => {
    return allClientsData.value.filter((client) => {
      // Filtro valoración
      const valorationPass = valorationFilter.value !== null && valorationFilter.value !== undefined 
        ? client.valoration >= valorationFilter.value 
        : true;

      // Filtro distancia
      const distancePass = (() => {
        const distanceVal = distanceFilter.value;
        if (distanceVal === 0 || distanceVal === -1) return true;
        return client.distance <= distanceVal;
      })();

      // Filtro artículos
      const articlesPass = (() => {
        const articlesVal = articlesFilter.value;
        if (articlesVal === 0 || articlesVal === -1) return true;
        return client.nArticles <= articlesVal;
      })();

      return valorationPass && distancePass && articlesPass;
    });
  });

  const itemsPerPage = 3;
  const page = ref(1);

  const paginatedClients = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return clientsData.value.slice(start, start + itemsPerPage);
  });

  const nextPage = () => {
    page.value++;
  };

  const prevPage = () => {
    if (page.value === 1) return;
    page.value--;
  };
  
  return {
    clientsData: paginatedClients,
    page,
    nextPage,
    prevPage,
    fullName,
    valorationFilter,
    transformDate,
  };
}