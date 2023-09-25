import { useEffect, useState } from "react";
import PhoneCards from "../PhoneCards/PhoneCards";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const [isShow, setIsShow] = useState(false);

    const [notFound, setNotFound] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const favoritesPhones = JSON.parse(localStorage.getItem('phone'));
        if (favoritesPhones) {
            setFavorites(favoritesPhones);
            // console.log(favoritesPhones);
            const total = favoritesPhones.reduce((preVal, currentVal) => preVal + currentVal.price, 0);
            // console.log(total);
            setTotalPrice(total);
        }
        else {
            setNotFound('No Data Found');
        }
    }, [])

    const handleRemoveFavorites = () => {
        localStorage.clear()
        setFavorites([]);
        setNotFound('No Data Found')
    }

    const handleShowAll = () => {
        setIsShow(!isShow);
        console.log(isShow);
    }

    return (
        <div>
            {
                notFound ? <p className="text-2xl font-semibold h-[80vh] flex items-center justify-center">{notFound}</p> :
                    <div>
                        <div className="flex justify-center">
                            <button
                                onClick={handleRemoveFavorites}
                                className="btn btn-secondary my-5">Delete All Favorites</button>
                        </div>

                        <div>
                            <p className="text-2xl font-semibold text-white text-center pb-5">Total Favorites Items Price: {totalPrice}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {
                                isShow ?
                                    favorites.map(phone => <PhoneCards key={phone.id} phone={phone}></PhoneCards>)
                                    :
                                    favorites.slice(0, 4).map(phone => <PhoneCards key={phone.id} phone={phone}></PhoneCards>)
                            }

                        </div>
                        {
                            favorites.length > 4 ?
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleShowAll}
                                        className="btn btn-secondary my-5">
                                        {
                                            isShow ? 'Show Less' : 'Show All'
                                        }
                                    </button>
                                </div>
                                :
                                <div></div>
                        }
                    </div>
            }
        </div>
    );
};

export default Favorites;