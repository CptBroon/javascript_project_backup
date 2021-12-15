import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import RegionCard from "../components/RegionCard";

const RegionsPage = ({allAnimals, allRegions}) => {
    const [regionalAnimals, setRegionalAnimals] = useState([]);
    const [filterRegion, setFilterRegion] = useState("");
    const [listFiltered, setListFiltered] = useState(false);
    
    const generateRegionList = (regionList) => {
        if (allRegions.length) {
            return regionList.map(region => <RegionCard region={region} listFiltered={listFiltered} setListFiltered={setListFiltered} allAnimals={allAnimals} setFilterRegion={setFilterRegion} setRegionalAnimals={setRegionalAnimals}/>)
        }
    }

    const generateRegionalAnimalList = (regionalList) => {
        if (regionalList.length) {
            return regionalList.map(animal => <AnimalCard animal={animal}/>)
        }
    }

    return (
        <>
            <h1> Regions </h1>
            <ul id="region-list" className="flex-row">
                {generateRegionList(allRegions)}
            </ul>
            {listFiltered && <div id="filtered-list">
                <h3> List of all animals by selected region </h3>
                <ul id="filtered-animal-list">
                    {generateRegionalAnimalList(regionalAnimals)}
                </ul>
            </div>}
        </>
    )
}

export default RegionsPage;