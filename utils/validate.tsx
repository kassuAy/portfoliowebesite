export const Validate=({firstName,lastName,email,studentId}:{
firstName:string
lastName:string
email:string
studentId:string
})=>{
const errors:{firstName?:String,lastName?:String,email?:String,studentId?:String}={}
if (!firstName || firstName.trim()===""){
    errors.firstName="this field is required"
}
if (!lastName ||lastName.trim()===''){
    errors.lastName='this field is required'
}
if(!email || email.trim()==''){
    errors.email='email is required'
}
else if(!/^[A-Z0-9._%+-]+@[A-Z0-9*-]+\.[A-Z]{2,4}$/i.test(email)){
 errors.email="invalid email address"

}
if(!studentId || studentId.trim()==='')
{
    errors.studentId="please enter your id"
}
return errors
}