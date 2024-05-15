import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormCar = ({addCar,editData,updateCar,setEditData}) => {

       const {register,handleSubmit,reset,}=useForm()
       useEffect(() => {
         reset(editData);
       }, [editData])
       
       
       const submit=(data)=>{
        if (editData){
            updateCar('/cars',editData.id,data)
            setEditData()
       }else{
        addCar('/cars',data)
       }
        
        console.log(data)
        reset({
            brand:'',
            model:'',
            color:'',
            year:'',
            price:'',
        })
       }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <div>
            <label htmlFor="brand">Brand</label>
            <input {...register('brand')} id="brande" type="text" />
        </div>
        <div>
            <label htmlFor="model">Model</label>
            <input {...register('model')} id="model"type='text'/>
        </div>
        <div>
            <label htmlFor="color">Color</label>
            <input {...register('color')}     id="color" type="text" />
        </div>
        <div>
            <label htmlFor="year">Year</label>
            <input  {...register('year')}    id="year" type="text" />
        </div>
        <div>
            <label htmlFor="price">Price</label>
            <input {...register('price')}     id="price" type="text" />
        </div>

        <button>submit</button>
    </form>
  )
}

export default FormCar
