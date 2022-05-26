import react from "react";
import axios from axios;

const Signalement = ()=> {
    const signal = ( ) => {
        axios.put('/fake/:username/:text', {username: this.props.username, text: this.props.text},
        {withCredentials:true})
    }
    return(<button className='Signalement' onClick={() => signal()}> Signaler</button>)
}

export default Signalement;