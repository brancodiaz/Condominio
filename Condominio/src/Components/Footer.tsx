import './Footer.css'; // Import CSS for styling
import '../index.css';
const Footer: React.FC = () => {
    return (
        <footer className='footer'>
        <section className='infoImportante'>
        <h2>Cuenta Bancaria</h2>
        <p>
            BCP: 21500073173008
        </p>
        <p>
            Interbancaria (CCI): 00221510007317300820
        </p>
        </section>
        </footer>
    );
};

export default Footer;