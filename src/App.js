import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isEditable:null,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            city: "",
            state: "",
            zip: "",
            hobby: [],
            items: [],
        };
    }
    onChange = (event) =>{
         this.setState({[event.target.name]: event.target.value})
    }

    saveUserData = (e) => {
        e.preventDefault()
        const {firstName, lastName, email, password, city, state, zip, hobby} = this.state
        let items = ({firstName, lastName, email, password, city, state, zip})
        console.log(items)
    }
  render() {
        const {firstName, lastName, email, password, city, state, zip, hobby} = this.state
    return (
      <div className="App container mx-auto">

          <form className="w-full max-w-md">
              <div className="flex content-center flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-first-name">
                          First Name
                      </label>
                      <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          name="firstName" id="grid-first-name" type="text" placeholder="Jane" value={firstName} onChange={this.onChange}/>
                      <p className="text-red text-xs italic">Please fill out this field.</p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-last-name">
                          Last Name
                      </label>
                      <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                          name="lastName" id="grid-last-name" type="text" placeholder="Doe" value={lastName} onChange={this.onChange}/>
                  </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-password">
                          Email
                      </label>
                      <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                          name="email" id="grid-password" type="text" placeholder="xxxx@xxx.com" value={email} onChange={this.onChange}/>
                  </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-password">
                          Password
                      </label>
                      <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                          name="password" type="password" placeholder="******************" value={password} onChange={this.onChange}/>
                      <p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
                  </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-city">
                          City
                      </label>
                      <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                          id="grid-city" type="text" name="city" placeholder="Albuquerque" value={city} onChange={this.onChange}/>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-state">
                          State
                      </label>
                      <div className="relative">
                          <select
                              className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                              id="grid-state" name="state" value={state} onChange={this.onChange}>
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                          </select>
                          <div
                              className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                   viewBox="0 0 20 20">
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-zip">
                          Zip
                      </label>
                      <input
                          className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
                          id="grid-zip" type="text" name="zip" value={zip} onChange={this.onChange} placeholder="90210"/>
                  </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                             htmlFor="grid-city">
                          Hobby
                          <input
                              className="mr-2 leading-tight" type="checkbox" />
                              <span className="text-sm">
                                Reading
                              </span>
                              <input
                                  className="mr-2 leading-tight" type="checkbox" />
                              <span className="text-sm">
                                Reading
                              </span>
                      </label>
                  </div>
              </div>
              <div className="flex content-center flex-wrap -mx-3 mb-2">

                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <button
                          className="bg-white text-center hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded shadow"
                            onClick={this.saveUserData}>
                          Save
                      </button>
                  </div>
                  <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <button
                          className="bg-red hover:bg-green-lightest text-red-darkest font-semibold py-2 px-4 border border-red-light rounded shadow">
                          Reset
                      </button>
                  </div>
              </div>
          </form>
      </div>
    );
  }
}

export default App;
