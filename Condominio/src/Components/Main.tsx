import { useEffect, useState } from 'react'
import './Main.css'; // Import CSS for styling
import '../index.css';

// Define the type for the data items
interface DataItem {
    id: number;
    departmentId: string;
    description: string;
    status: 'Pendiente' | 'En Proceso Validación' | 'Pagado' | 'Vencido';
}

const Main: React.FC = () => {

    const depas: string[] = [
        '101', '102', '103', '104', '105', '106', '107', '108', '109',
        '201', '202', '203', '204', '205', '206', '207', '208',
        '301', '302', '303', '304', '305', '306', '307', '308', '309',
        '401', '402', '403', '404', '405', '406', '407', '408',
        '501', '502', '503', '504', '505', '506', '507', '508', '509',
        '601', '602', '603', '604', '605', '606', '607', '608',
        '701', '702', '703', '704', '705', '706', '707', '708', '709',
        '801', '802', '803', '804', '805', '806', '807', '808',
        '901', '902', '903', '904', '905', '906', '907', '908', '909',
        '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008',
        '1101', '1102', '1103', '1104', '1105', '1106', '1107', '1108', '1109',
        '1201', '1202', '1203', '1204', '1205', '1206', '1207', '1208',
        '1301', '1302', '1303', '1304', '1305', '1306', '1307', '1308', '1309',
        '1401', '1402', '1403', '1404', '1405', '1406', '1407', '1408',
        '1501', '1502', '1503', '1504', '1505', '1506', '1507', '1508', '1509'
    ];

    const data: DataItem[] = [
        { id: 1, departmentId: '101', description: 'Agosto 2024', status: 'Pagado' },
        { id: 4, departmentId: '101', description: 'Setiembre 2024', status: 'Pagado' },
        { id: 2, departmentId: '102', description: 'Agosto 2024', status: 'Pagado' },
        { id: 5, departmentId: '102', description: 'Setiembre 2024', status: 'Vencido' },
        { id: 3, departmentId: '103', description: 'Agosto 2024', status: 'Pagado' },
        { id: 6, departmentId: '103', description: 'Setiembre 2024', status: 'En Proceso Validación' },
        { id: 7, departmentId: '104', description: 'Agosto 2024', status: 'Vencido' },
        { id: 8, departmentId: '104', description: 'Setiembre 2024', status: 'Vencido' },
        { id: 9, departmentId: '105', description: 'Agosto 2024', status: 'Pagado' },
        { id: 10, departmentId: '105', description: 'Setiembre 2024', status: 'Vencido' },
        { id: 11, departmentId: '106', description: 'Agosto 2024', status: 'Pagado' },
        { id: 12, departmentId: '106', description: 'Setiembre 2024', status: 'En Proceso Validación' },
        { id: 13, departmentId: '107', description: 'Agosto 2024', status: 'Pagado' },
        { id: 14, departmentId: '107', description: 'Setiembre 2024', status: 'En Proceso Validación' },
        { id: 15, departmentId: '505', description: 'Agosto 2024', status: 'Pagado' },
        { id: 16, departmentId: '505', description: 'Setiembre 2024', status: 'Pagado' },
    ];

    const [filteredData, setFilteredData] = useState<DataItem[]>(data);

    const getStatusIcon = (status: DataItem['status']) => {
        switch (status) {
            case 'Pagado':
                return '✅'; // Checkmark for completed
            case 'Pendiente':
                return '⏳'; // Hourglass for pending
            case 'En Proceso Validación':
                return '🔄'; // Refresh for in-progress
            case 'Vencido':
                return '🚨'; // Refresh for in-progress
            default:
                return '❓'; // Unknown status
        }
    };

    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        const filterList = () => {
            setFilteredData(data.filter(item => item.departmentId === selectedOption));
        };

        filterList();
    }, [selectedOption]);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(event.target.value);
    };

    return (
        <main className="main">
            <div className='search-bar'>
                <select className='selectDepa' value={selectedOption} onChange={handleSelectChange}>
                    <option id='000' key='000' value='000' className='selectOption'>----------</option>
                    {
                        depas.map(depa => (
                            <option id={depa} key={depa} value={depa} className='selectOption'>
                                {depa}
                            </option>
                        ))}
                </select>
                {/* <button>Buscar</button> */}
            </div>
            {filteredData.length <= 0 && (<p>Sin resultados</p>)}
            {filteredData.length > 0 && (
                <>
                    <p>Resultados para departamento: {selectedOption}</p>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Mes
                                </th>
                                <th>
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map(item => (
                                <tr>
                                    <td>{item.description}</td>
                                    <td>{getStatusIcon(item.status)} {item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </main>
    );
};

export default Main;