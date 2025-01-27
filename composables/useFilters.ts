export function useFilters() {
  const valorationFilter = ref<number>(0);
  const distanceFilter = ref<number>(0);
  const articlesFilter = ref<number>(0);
  
  return { valorationFilter, distanceFilter, articlesFilter };
}