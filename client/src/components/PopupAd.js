const PopupAd = ({hidePopup}) => {
    return (
        <div className="ad">
            <div className="ad-main">
                <button className="close-btn" onClick={hidePopup}>x</button>
                <h3>DO YOU HAVE A PROPERTY TO REGISTER IN SCOTLAND?</h3>
                <p>ALL APPLICATIONS WILL SIT ON A SHELF FOR AT LEAST 6 MONTHS</p>
            </div>
        </div>
    )
}

export default PopupAd