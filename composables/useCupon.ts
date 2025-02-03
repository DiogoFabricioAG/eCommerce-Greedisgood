export const useCupon = () => {
  const cuponActivated = ref(false)

  const activateMyCupon = (): void => {
    cuponActivated.value = !cuponActivated.value
    if (!cuponActivated.value) {
      const inputCupon = document.getElementById('input-cupon')
      setTimeout(() => {
        inputCupon?.classList.add('hidden')

      }, 100)
      inputCupon?.classList.remove('scale-90')
      inputCupon?.classList.add('scale-0')
    }
    else {
      const inputCupon = document.getElementById('input-cupon')
      inputCupon?.classList.remove('hidden')
      setTimeout(() => {
        inputCupon?.classList.remove('scale-0')
        inputCupon?.classList.add('scale-90')
      }, 100)
    }
  }


  return {
    cuponActivated,
    activateMyCupon
  }
}
