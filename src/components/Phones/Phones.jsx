
import PropTypes from 'prop-types';
import Phone from '../Phone/Phone';

Phones.propTypes = {
    phones: PropTypes.array.isRequired,
};

function Phones({phones}) {
    // console.log(phones);
    return (
        <div>
            <h1 className="text-2xl font-semibold text-center py-5">All categories phones</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
}

export default Phones;