import { FaCircle, FaCross, FaPen} from 'react-icons/fa'


function Icon({name}){
   if(name == 'circle'){
    return <FaCircle />
   }
   else if (name == 'cross') {
    return <FaCross />
   }
   else{
    return <FaPen />
   }
}

export default Icon