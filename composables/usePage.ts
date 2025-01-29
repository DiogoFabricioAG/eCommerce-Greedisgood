export const usePage = () => {
  const page = ref(1);

  
  const nextPage = () => {
    page.value++;
  };

  const prevPage = () => {
    if (page.value === 1) return;
    page.value--;
  };

  return {
    page,
    nextPage,
    prevPage
  }
}
