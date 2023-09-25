import swal from 'sweetalert';
import PropTypes from 'prop-types';

PhoneCards.propTypes = {
    phone: PropTypes.object
};

function PhoneCards({ phone }) {

    const { id, image, phone_name, brand_name } = phone;

    const handleAddToFavorites = () => {

        const favoritePhonesArray = [];

        const favoritesPhones = JSON.parse(localStorage.getItem('phone'));

        if (!favoritesPhones) {
            favoritePhonesArray.push(phone);
            localStorage.setItem('phone', JSON.stringify(favoritePhonesArray));
            swal("Good job!", "Phone added successfully!!", "success");
        }
        else {

            const isExists = favoritesPhones.find(phone => phone.id === id)
            if (!isExists) {
                favoritePhonesArray.push(...favoritesPhones, phone);
                localStorage.setItem('phone', JSON.stringify(favoritePhonesArray))
                swal("Good job!", "Phone added successfully!", "success");
            }
            else {
                swal("Error!", "Phone added already", "error");
            }
        }
        console.log(favoritesPhones);
    }
    return (
        <div className='flex flex-col items-center'>
            <div className="relative flex items-center flex-row rounded-xl bg-white bg-clip-border text-gray-700 h-full shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                        {brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {phone_name}
                    </h4>
                    <a className="inline-block">
                        <button
                            onClick={handleAddToFavorites}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all bg-pink-500/10 hover:bg-pink-500/20 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Add to favorites
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PhoneCards;