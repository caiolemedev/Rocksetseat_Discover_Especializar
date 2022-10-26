import React, {useState, useEffect} from 'react';
import './style.css';
import {Card, CardProps} from '../../components/Card'

type ProfileResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

export function Home() {
  const [studentName, setStudentName] = useState("Seu nome aqui");
  const [students, setStudents] = useState<CardProps[]>([]);
  const [user, setUser] = useState<User>({} as User);

  function handleAddStudent(){
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br",{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };

    setStudents(prevState => [...prevState, newStudent]);
  }


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/caiolemedev')
      const data = await response.json() as ProfileResponse
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }

    fetchData();
  },[]);

  return (
    <div className='container'>
    <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
    </header>
    <input 
    type="text" 
    placeholder="Digite um nome..."
    onChange={e => setStudentName(e.target.value)}
    />
    <button
    type="button"
    onClick={handleAddStudent}
    >Adicionar</button>

    {
      students.map(student => 
      <Card 
      key={student.time} //usamos o time pois é mais específico o ideal é usar id
      name={student.name} 
      time={student.time}
      />)
      }
    
    </div>
  )
}
