import mulher from '../assets/mulher-foto.jpg'

export function Profile(){
    return(
        <div>
            
        <img src= {mulher} 
        alt="Foto de uma mulher linda" 
        className='img-portfolio'/>

        <h3>Lara Raj</h3>
        <p>Modelo</p>
        </div>
    );
};