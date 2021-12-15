const AnimalCard = ({animal}) =>{

    return (
        <li>
            <button className="animal-card">
                <img className="animal-card-image" src={animal.images[0]} alt="picture"/>
                <h4>{animal.name}</h4>
            </button>
        </li>
    )
}
export default AnimalCard;