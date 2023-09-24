import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCards from "../PhoneCards/PhoneCards";


const PhoneDetails = () => {

    const [phone, setPhone] = useState([]);

    const phones = useLoaderData();

    const { id } = useParams();

    useEffect(() => {
        const findPhone = phones?.find(phone => phone.id === id)
        setPhone(findPhone);
    }, [id, phones])

    console.log(phone);

    return (
        <div>
            {
                <PhoneCards phone={phone}></PhoneCards>
            }
        </div>
    );
};

export default PhoneDetails;