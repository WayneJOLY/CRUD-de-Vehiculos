import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "../CSS/formCar.css"
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
            <input {...register('brand')} placeholder='Brand' type="text" />
        </div>
        <div>
 
            <input {...register('model')}   placeholder='Model' type='text'/>
        </div>
        <div>
            <input {...register('color')}   placeholder='Color'      type="text" />
        </div>
        <div>
            <input  {...register('year')}   placeholder='Year'     type="text" />
        </div>
        <div>
            <input {...register('price')}   placeholder='Price'      type="text" />
        </div>

        <button className='submit' >submit</button>
    </form>
  )
}

export default FormCar
