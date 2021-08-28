import React from 'react'
import styleModule from './style.module.css'

const ContactsForm = () => {

  return (
        <form className={styleModule.form}>
          <div className={styleModule.row}>
            <h3 className={styleModule.contactsFormTitle}>Solicite nosso contato:</h3>
          </div>

          <div className={styleModule.row}>
            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>Nome*</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>

            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>E-mail*</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>
          </div>

          <div className={styleModule.row}>
            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>Telefone*</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>

            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>País*</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>
          </div>

          <div className={styleModule.row}>
            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>Empresa*</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>

            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>Cargo</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>
          </div>
              
          <div className={styleModule.row}>
            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>Numero de colaboradores</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>

            <div className={styleModule.half}>
              <label className={styleModule.contactsLabel}>Url do site</label>
              <input className={styleModule.contactsFormInput} type="text"/>
            </div>
          </div>
          
          <div className={styleModule.row}>
            <label className={styleModule.contactsLabel}>Como podemos ajudar?</label>
          </div>
          <div className={styleModule.row}>
            <textarea className={styleModule.contactsFormTextarea}/>
          </div>

          <div className={styleModule.row}>
            <input type="submit" value="Enviar" className={styleModule.contactsFormSubmit}/>
          </div>
        </form>
  )
}

export default ContactsForm