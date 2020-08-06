import React, { useState, FormEvent } from 'react'

import './styles.css'
import { PageHeader } from '../../components/PageHeader'
import { TeacherItem,ITeacher } from '../../components/TeacherItem'
import { Input } from '../../components/Input'
import { Select } from '../../components/Select'
import { api } from '../../services/api'

const TeacherList: React.FC = () =>{

  const [teachers,setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day,setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e:FormEvent){
    e.preventDefault()
    const response = await api.get('classes',{
      params:{
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
  }
  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e=>{setSubject(e.target.value)}}
            options={[
              {value: 'Artes',label: 'Artes'},
              {value: 'Fisica',label: 'Fisica'},
              {value: 'Quimica',label: 'Quimica'},
              {value: 'Biologia',label: 'Biologia'},
              {value: 'Matematica',label: 'Matematica'},
              {value: 'Portugues',label: 'Portugues'},
              {value: 'Historia',label: 'Historia'},
              {value: 'Geografia',label: 'Geografia'},
              {value: 'Educação fisica',label: 'Educação fisica'}
            ]}
          />
          <Select
            name="week_day"
            label="Dia da Semana"
            value={week_day}
            onChange={e=>{setWeekDay(e.target.value)}}
            options={[
              {value: '0',label: 'Domingo'},
              {value: '1',label: 'Segunda-feira'},
              {value: '2',label: 'Terça-feira'},
              {value: '3',label: 'Quarta-feira'},
              {value: '4',label: 'Quinta-feira'},
              {value: '5',label: 'Sexta-feira'},
              {value: '6',label: 'Sábado'},
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e=>setTime(e.target.value)}
          />
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        {teachers.map((teacher:ITeacher)=>{
          return(
            <TeacherItem key={teacher.id} teacher={teacher}/>
          )
        })}
      </main>
    </div>
  )
}

export {TeacherList}
