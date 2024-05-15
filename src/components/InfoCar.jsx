import "../CSS/infoCar.css"
const InfoCar = ({car,deleteCar,setEditData}) => {
    const handleDelete=()=>{
        deleteCar('/cars',car.id)
    }
const handleEdit=()=>{
  setEditData(car)
}
  return (
    <div className="car">
      <h2 className="car-title"> {car.brand} {car.model} </h2>
      <ul>
        <li> Color :{car.color}</li>
        <li> Year :{car.year}</li>
        <li> Price :{car.price}</li>
      </ul>
      <div className="car-btn">
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Editar</button>
      </div>
    </div>
  )
}

export default InfoCar
