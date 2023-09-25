import { useEffect, useState } from "react";
import PhoneCards from "../PhoneCards/PhoneCards";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

    const [notFound, setNotFound] = useState('');

    useEffect(()=>{
        const favoritesPhones = JSON.parse(localStorage.getItem('phone'));
    if(favoritesPhones){
        setFavorites(favoritesPhones);
        console.log(favoritesPhones);
    }
    else{
        setNotFound('No Data Found');
    }
    },[])

    
    return (
        <div>
            {
                notFound ? <p className="text-2xl font-semibold h-[80vh] flex items-center justify-center">{notFound}</p> : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            favorites.map(phone => <PhoneCards key={phone.id} phone={phone}></PhoneCards>)
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Favorites;