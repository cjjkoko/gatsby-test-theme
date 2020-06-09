
export default {
  namespace: "test2",
  state: {
    test: 1,
    site: {},
    testShadow:{}
  },
  reducers: {
    test(state, { payload}) {
      console.log('test')
      return state
    }
  }
}
