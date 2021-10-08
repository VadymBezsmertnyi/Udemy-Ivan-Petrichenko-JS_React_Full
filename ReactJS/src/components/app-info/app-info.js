import './app-info.css';

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Ощее число сотрудников: {employees}</h2>
            <h2>Премию у нас получат: {increased}</h2>
        </div>
    )
}
 
export default AppInfo;