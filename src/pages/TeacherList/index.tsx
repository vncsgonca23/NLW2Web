import React from 'react'

import './styles.css'
import { PageHeader } from '../../components/PageHeader'
import { TeacherItem } from '../../components/TeacherItem'
const TeacherList: React.FC = () =>{
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time"/>
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem name="Vinicius Gonçalves" price="100,00" subjects="Fisica"/>
        <TeacherItem name="Matheus" price="50,00" subjects="Quimica"/>
      </main>
    </div>
  )
}

export {TeacherList}
