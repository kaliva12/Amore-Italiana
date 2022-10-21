import menu from '../app/img/menu.png'


const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <img className='menu1' src={menu} alt='menu'></img>
                <button className="close-btn" onClick={() => props.setTrigger()} >X</button>
            </div>

        </div>
    ) : "";
}

export default Popup;