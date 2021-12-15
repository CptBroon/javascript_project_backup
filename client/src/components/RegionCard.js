const RegionCard = ({region, listFiltered, setListFiltered, allAnimals, setFilterRegion, setRegionalAnimals}) => {

    const imageSource = (region) => {
        switch (region) {
            case "desert":
                return "/img/desert.jpeg"
            case "ocean":
                return "/img/ocean.jpeg"
            case "plains":
                return "/img/plains.jpeg"
            case "rainforest":
                return "/img/rainforest.jpeg"
            case "tundra":
                return "/img/tundra.jpeg"
        }
    }

    const handleFilterClick = (e) => {
        const filteredList = []
        allAnimals.map(animal => {
            if (animal.region === e.target.value) {
                filteredList.push(animal)
            }
        })
        setRegionalAnimals(filteredList)
        setFilterRegion(region)
        if (!listFiltered) {
            setListFiltered(true)
            
        }
    }

    return (
        <li className="region-title">
            <div>
                <img src={imageSource(region)} onClick={handleFilterClick} value={region} alt="hello"/>
                <button className="region-btn" onClick={handleFilterClick} value={region}>
                    {region[0].toUpperCase() + region.slice(1)}
                </button>
            </div>
        </li>
    )
}

export default RegionCard