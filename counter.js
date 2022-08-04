export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count isee ${counter}`
  }
  element.addEventListener('click', () => setCounter(++counter))
  setCounter(0)
}
