import React, { Component } from 'react'

export class Forms extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      nome:'',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      CasaApto: false,
      cv:'',
      job:'',
      jobdescription:''

    }
  }

  handleChange({target}) {
    const {name} = target
    const value = target.type === 'radio' ? target.checked : target.value
    
    this.setState({
      [name]: value
    });

  }
  render() {
    return (
      <div>
        <h1>Formulário React</h1>
        <fieldset>

          <label>
            Nome completo
            <input name="nome" 
            type="text" 
            maxLength="40"
            value={this.state.nome} onChange={this.handleChange}
            required
            />
          </label>

          <label>
            Email
            <input name="email" 
            type="text"
            maxLength="50"
            value={this.state.email} onChange={this.handleChange}
            required
            />
          </label>

          <label>
            CPF
            <input name="cpf" 
            type="text"
            maxLength="11"
            value={this.state.cpf} onChange={this.handleChange}
            required
            />
          </label>

          <label>
            Endereço
            <textarea 
            name="endereco" 
            type="text"
            maxLength="200"
            value={this.state.endereco} onChange={this.handleChange}
            required
            />
          </label>

          <label>
            Cidade
            <textarea name="cidade" 
            type="text"
            maxLength="28"
            value={this.state.cidade} onChange={this.handleChange}
            required
            />
          </label>

          <label>
            Estado
            <select name="estado"  value={this.state.estado} onChange={this.handleChange} required/>
            <option value =""></option>
          </label>
          
          <label>
            Casa
            <input name="CasaApto"
            type="radio"
            value={this.state.CasaApto} onChange={this.handleChange}
            required
            />
          </label>

          <label>
            Apartamento
            <input name="CasaApto" 
            type="radio"
            required
            value={this.state.CasaApto} onChange={this.handleChange}
            />
          </label>


        </fieldset>

        <fieldset>

        <label>
            Mini Currículo
            <textarea name="cv" value={this.state.cv} onChange={this.handleChange} maxLength="1000" required/>
          </label>

          <label>
            Cargo
            <textarea name="job"  value={this.state.job} onChange={this.handleChange} maxLength="40" required/>
          </label>

          <label>
            Descrição do cargo
            <textarea name="jobdescription" value={this.state.jobdescription} onChange={this.handleChange} maxLength="500" required/>
          </label>

        </fieldset>

        <button>Enviar</button>
        <button>Limpar</button>
        
      </div>
    )
  }
}

export default Forms
