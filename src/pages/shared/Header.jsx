// const Header = () => {
//     return (
//         <div>
//             <img src="/src/assets/logo.png" alt="" />
//         </div>
//     );
// };

// export default Header;



import logo from '../../../src/assets/logo.png';
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center'>
            <img className="mx-auto" src={logo} alt="" />
            <p className='text-2xl '>
                Journalilsm Without Fear or Favor
            </p>
            <p className='text-xl '> {moment().format("dddd, MMMM D, YYYY, h:mm a")}

            </p>
        </div>
    );
};

export default Header;