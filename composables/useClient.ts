import { ref, computed, watch } from 'vue';
import type { clientFindRequired } from '@/types/myClient';
import { transformDate, fullName } from '@/helpers/dateUtils';
import { useFilters } from '~/composables/useFilter';
import { fetchClients } from '~/services/apiClients';

export function useClients() {
  const allClientsData = ref<clientFindRequired[]>([]);

  const { valorationFilter, articlesFilter, distanceFilter, searchFilter } = useFilters();

  onMounted(async () => {
    allClientsData.value = await fetchClients();
  });

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