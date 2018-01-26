import React from 'react'
import renderer from 'react-test-renderer'
import MyComponent from '../MyComponent'

const init = props => {
  const snapshot = renderer.create(<MyComponent {...props} />)
  return {
    snapshot: snapshot.toJSON(),
    renderer: snapshot.getInstance()
  }
}

describe('My Component', () => {
  it('should render properly', () => {
    const { snapshot } = init()
    expect(snapshot).toMatchSnapshot()
  })
})
