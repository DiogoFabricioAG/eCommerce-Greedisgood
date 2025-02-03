export function useFilters() {
  const valorationFilter = ref<number>(0);
  const distanceFilter = ref<number>(0);
  const articlesFilter = ref<number>(0);
  const searchFilter = ref<string>('');
  const categoryFilter = ref<string>('');
  const priceFilter = ref<number>(0);
  const dispatchFilter = ref<string>('');
  const isDiscountFilter = ref<boolean>(false);
  const hasBidders = ref<boolean>(false);
  const timeRange = ref<number>(0);

  return {
    valorationFilter,
    distanceFilter,
    articlesFilter,
    searchFilter,
    categoryFilter,
    priceFilter,
    dispatchFilter,
    isDiscountFilter,
    hasBidders,
    timeRange
  };
}