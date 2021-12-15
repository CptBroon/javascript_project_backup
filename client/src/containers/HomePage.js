import Slideshow from "../components/Slideshow";
import AnimalCard from "../components/AnimalCard";

const HomePage = ({allAnimals}) => {

    const data = [
        {
          image: "/img/desert.jpeg",
          caption: "Desert"
        },
        {
          image: "/img/ocean.jpeg",
          caption: "Ocean"
        },
        {
          image: "/img/plains.jpeg",
          caption: "Plains"
        },
        {
          image: "/img/rainforest.jpeg",
          caption: "Rainforest"
        },
        {
          image: "/img/tundra.jpeg",
          caption: "Tundra"
        }
      ];
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
    
    const generateRandomIndex = (lengthOfArray) => {
        return Math.floor(Math.random() * lengthOfArray)
    }

    const selectRandomAnimal = (animalArray) => {
        return animalArray[generateRandomIndex(animalArray.length)]
    }

    const generateRandomAnimalList = (numberOfAnimals, animalArray) => {
        const randomAnimals = []
        for (let i=0; i < numberOfAnimals; i++) {
            const animal = selectRandomAnimal(animalArray)
            randomAnimals.push(animal) 
        }
        return randomAnimals
    }

    const createAnimalCard = (animal) => {
        return <AnimalCard animal={animal}/>
    }
    
    const generateRandomAnimalsGrid = () => {
        if (allAnimals.length) {
            const animals = generateRandomAnimalList(6, allAnimals)
            return animals.map(createAnimalCard) 
        }
    }

    return (
        <div className="flex-column">
            <div id="region-images-carousel">
                    <Slideshow data={data} captionStyle={captionStyle} slideNumberStyle={slideNumberStyle}/>
            </div>
            <div id="random-species-section">
                <ul id="random-species-list">
                    {generateRandomAnimalsGrid()}
                </ul>
            </div>
        </div>
    )
}

export default HomePage;