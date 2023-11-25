import axios from "axios";

const BaseUrl = "https://crud.teamrabbil.com/api/v1/"
 

// Read Methood 
export async function ReadReuest(){
   const res = await axios.get(BaseUrl+"ReadProduct")
   return res.data['data']
}


// Post Methood
export async function CreateReuest(JSONBody){
   const res = await axios.post(BaseUrl+"CreateProduct", JSONBody)
   return res.data['status']
}




