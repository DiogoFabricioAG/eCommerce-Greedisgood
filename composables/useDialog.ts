export const useDialog = () => {
  const dialog = ref(false)
  const options = ref(1)
  const openDialog = (option: number): void => {
    dialog.value = true
    options.value = option
  }

  const closeDialog = (): void => {
    dialog.value = false
  }

  return {
    dialog,
    openDialog,
    options,
    closeDialog
  }
}
