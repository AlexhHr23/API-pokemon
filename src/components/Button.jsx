import '../sass/Button.scss';
const Button = ({icon, hadleClick}) => {
  return (
    <div className='button_box'>
        <button 
            className="button" 
            onClick={hadleClick}
            >{icon}
        </button>
        <div className="button_shadow"></div>
    </div>
  )
}

export {Button};