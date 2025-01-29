import { ref, computed, watch } from 'vue';
import type { clientFindRequired } from '@/types/myClient';
import { transformDate, fullName } from '@/helpers/dateUtils';
import { useFilters } from '~/composables/useFilter';

export function useClients() {
  const allClientsData = ref<clientFindRequired[]>([
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
      lastname : 'Tomatoso',
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
      lastname : 'Del Clavo',
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
      lastname : 'Puertas',
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
      lastname : 'Quito',
      distance: 100,
      valoration: 5,
      nArticles: 100,
      joinAt: new Date('2021-10-10'),
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
      image: 'https://unavatar.io/messi'
    },
  ]);
  const { valorationFilter, articlesFilter, distanceFilter, searchFilter } = useFilters();

  watch([valorationFilter, articlesFilter, distanceFilter], () => {
    page.value = 1;
  });

  const searchFilterLower = computed(() => searchFilter.value.toLowerCase());
  

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

      const searchPass = (() => {
        if (!searchFilter.value) return true;
        const fullNameClient = fullName(client.firstname, client.lastname).toLowerCase();
        return fullNameClient.includes(searchFilterLower.value);
      })

      return valorationPass && distancePass && articlesPass && searchPass();
    });
  });

  const itemsPerPage = 3;
  const {page, nextPage, prevPage} = usePage();
  
  const paginatedClients = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return clientsData.value.slice(start, start + itemsPerPage);
  });

  
  
  return {
    clientsData: paginatedClients,
    page,
    nextPage,
    prevPage,
    fullName,
    valorationFilter,
    transformDate,
    articlesFilter, 
    distanceFilter,
    searchFilter
  };
}