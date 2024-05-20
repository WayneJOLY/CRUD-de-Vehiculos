import { useEffect, useState} from 'react'
import './App.css'
import useCRUD from './hooks/useCRUD'
import FormCar from './components/FormCar'
import InfoCar from './components/InfoCar'
const urlBase='https://cars-crud.academlo.tech/'

function App() {
  
  const [editData, setEditData] = useState()
 const [cars,getCars,addCar,deleteCar,updateCar]= useCRUD(urlBase)

 useEffect(() => {
   getCars('/cars')
 }, [])
 
 console.log(cars)
  return (
    <>
      <div className='main-container'>
        <h1>CRUD</h1>
      <div className='form-container'>
      <FormCar
        addCar={addCar}
        editData={editData}
        updateCar={updateCar}
        setEditData={setEditData}/>
      </div>
        <div className='cars-conrainer'>
        {
          cars?.map(car=> (
          <InfoCar
          key={car.id}
          car={car}
          deleteCar={deleteCar}
          setEditData={setEditData}
          />))
        }
        </div>
      </div>
    </>
  )
}

export default App
