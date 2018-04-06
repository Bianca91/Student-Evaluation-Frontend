import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
    expect(app).toHaveClassName('App')
  })

  it('contains routes', () => {
    expect(app.find('BrowserRouter')).toHaveText('<BrowserRouter />')
  })
})
 // <BrowserRouter><div className="App"><Route exact={true} path="/students/:id" component={[Function: Connect]} />
 // <Route exact={true} path="/classess" component={[Function: Connect]} />
 // <Route exact={true} path="/login" component={[Function: Connect]} />
 // <Route exact={true} path="/students" component={[Function: Connect]} /></div></BrowserRouter>
