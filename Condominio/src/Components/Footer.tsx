import './Footer.css'; // Import CSS for styling
import '../index.css';
const Footer: React.FC = () => {
    return (
        <footer className='footer'>
            <p className="read-the-docs">
                Cuenta Bancaria BCP: 21500073173008
            </p>
            <p className="read-the-docs">
                Cuenta Interbancaria (CCI): 00221510007317300820
            </p>
        </footer>
    );
};

export default Footer;