import axios from "axios"
import { toast } from "react-toastify"

export const addProductToCart=async (el)=>{
    const response = await toast.promise(
        axios.post(`https://json-dummy-server-gajraj.herokuapp.com/cart`,el),
        {
          pending: 'Processing',
          success: 'Product added 👌',
          error: 'Product already available in cart 🤯'
        }
    );
    return response
}