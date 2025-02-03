import { fetchAuctions } from '@/services/apiAuctions';
import type { AuctionType } from '@/types/myAuctions';
import { getTimeFormatted } from '@/helpers/dateUtils';

export const useAuction = () => {
  const allAuctionData = ref<AuctionType[]>([])

  let interval: any;

  onMounted(async () => {
    allAuctionData.value = await fetchAuctions();

    interval = setInterval(() => {
      allAuctionData.value = [...allAuctionData.value]; // Forzar reactividad
    }, 1000);
  });

  // Limpiar el intervalo cuando el componente se desmonta
  onUnmounted(() => {
    clearInterval(interval);
  });

  const { categoryFilter, hasBidders, timeRange, searchFilter, priceFilter } =
    useFilters();
  const { page, nextPage, prevPage } = usePage();

  const auctionData = computed(() => {
    return allAuctionData.value.filter((item) => {
      const isCategory =
        categoryFilter.value === "" || item.category === categoryFilter.value;
      const isBidders = hasBidders || item.numBidders === 0;
      const isTimeRange =
        timeRange.value === 0 ||
        (timeRange.value === 1 &&
          item.timeLeft.getTime() < Date.now() + 5 * 60 * 60 * 1000) ||
        (timeRange.value === 2 &&
          item.timeLeft.getTime() < Date.now() + 12 * 60 * 60 * 1000) ||
        (timeRange.value === 3 &&
          item.timeLeft.getTime() < Date.now() + 24 * 60 * 60 * 1000);
      const isSearch =
        searchFilter.value === "" ||
        item.productName.toLowerCase().includes(searchFilter.value.toLowerCase());
      return isCategory && isBidders && isTimeRange && isSearch;
    });
  });
  console.log(auctionData.value);



  // Computed para actualizar en tiempo real los cronómetros de las subastas
  const auctionTimers = computed(() => {
    return allAuctionData.value.map((auction) => ({
      id: auction.id,
      timeLeft: getTimeFormatted(auction.timeLeft),
    }));
  });

  const itemsPerPage = 4;
  const paginatedItems = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return auctionData.value.slice(start, start + itemsPerPage);
  });
  // Intervalo para actualizar los cronómetros cada segundo

  return {
    paginatedItems,
    page,
    nextPage,
    prevPage,
    getTimeFormatted,
    hasBidders,
    priceFilter,
    timeRange,
    searchFilter,
    categoryFilter,

  }

}
