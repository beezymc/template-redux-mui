const incrementCount = (count) => {
  return({
    type: 'DECREMENT',
    count: count - 1
  })
}

export default incrementCount;