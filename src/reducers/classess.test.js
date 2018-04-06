import classess from './classess'

describe('classes reducer', () => {
  const reducer = classess
  const initialState = []

  it('returns an empty array with object classess', () => {
    expect(reducer()).toEqual([{}])
  })
})
