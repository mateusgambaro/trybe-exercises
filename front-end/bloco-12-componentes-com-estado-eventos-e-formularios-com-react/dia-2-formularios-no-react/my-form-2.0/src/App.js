import React, { Component } from 'react'

const INITTIAL_STATE = {
  nome:'',
  email: '',
  cpf: '',
  endereco: '',
  cidade: '',
  estado: '',
  CasaApto: '',
  cv:'',
  job:'',
  jobdescription:'',
  FormError: {},
  submitted: false,
}

export class Forms extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = INITTIAL_STATE;
    }
  }

  handleChange = event => {
    let {name, value} = event.target;

    if(name === "name") value = value.toUpperCase();
    if(name === "endereco") value = this.validateAddress(value);

    this.updateState(name, value);
  }

  validateAddress = endereco => endereco.replace(/[^\w\s]/gi, '')

  render() {
    return ( 
      <div>
      </div>
    )
  };

export default Forms
