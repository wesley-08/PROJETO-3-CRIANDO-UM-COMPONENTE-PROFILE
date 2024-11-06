export default function Profile(props){
    return(
        <div>
            <div className="codigo">
                <img className='logo'src={props.img}/> 
                <h1>{props.name}</h1>
                <hr/>
                <p>{props.bio}</p>
                <hr/>
                <p>{props.phone}</p>
                <hr/>
                <p>{props.email}</p>
                <hr/>
                <div className="button">
                <button>{props.github}</button> <br/>
                <button>{props.Linkedin}</button> <br/>
                <button>{props.Figma}</button>
                </div>
            </div> 
            
        </div>
    )
}