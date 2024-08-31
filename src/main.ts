import './style.css'
import { setupTabula } from './tabula';

const tabula = document.querySelector<HTMLCanvasElement>('#tabula');
setupTabula(tabula!);
