import ReactDom from 'react-dom/client'
import App from './App'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);