import Icon from "../Icon/Icon"
import './card.css'
import Grid from "../grid/Grid"

function Card({player, onPlay, index, gameEnd}){

    let icon = <Icon />
    if(player == 'o'){
        icon = <Icon name="circle" />
    }

    if(player == 'x'){
        icon = <Icon name="cross" />
    }

    return(
        <div className="card" onClick={() => !gameEnd && player == "" &&onPlay(index)}>
            {icon }
        </div>
    )
}

export default Card