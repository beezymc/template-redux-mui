const incrementCount = (count) => {
  return({
    type: 'INCREMENT',
    count: count + 1
  })
}

export default incrementCount;