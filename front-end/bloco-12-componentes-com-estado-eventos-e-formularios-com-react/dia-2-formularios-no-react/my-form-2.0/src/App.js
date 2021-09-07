import React, { Component } from 'react'

export class Forms extends Component {
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
            required
            />
          </label>

          <label>
            Email
            <input name="email" 
            type="text"
            maxLength="50"
            required
            />
          </label>

          <label>
            CPF
            <input name="cpf" 
            type="text"
            maxLength="11"
            required
            />
          </label>

          <label>
            Endereço
            <textarea 
            name="endereço" 
            type="text"
            maxLength="200"
            required
            />
          </label>

          <label>
            Cidade
            <textarea name="cidade" 
            type="text"
            maxLength="28"
            required
            />
          </label>

          <label>
            Estado
            <select name="estado" required/>
            <option value =""></option>
          </label>
          
          <label>
            Casa
            <input name="Casa-Apto"
            type="radio"
            required
            />
          </label>

          <label>
            Apartamento
            <input name="Casa-Apto" 
            type="radio"
            required
            />
          </label>


        </fieldset>

        <fieldset>

        <label>
            Mini Currículo
            <textarea name="cv" type="text" maxLength="1000" required/>
          </label>

          <label>
            Cargo
            <textarea name="job" type="text" maxLength="40" required/>
          </label>

          <label>
            Descrição do cargo
            <textarea name="job-description" type="text" maxLength="500" required/>
          </label>

        </fieldset>

        <button>Enviar</button>
        <button>Limpar</button>
        
      </div>
    )
  }
}

export default Forms
