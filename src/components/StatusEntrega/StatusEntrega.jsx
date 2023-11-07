import "./StatusEntrega.css";
import { useState } from 'react';

function StatusEntrega(){
    const[pendente, setPendente] = useState(false);
    const[transito, setTransito] = useState(false);
    const[entregue, setEntregue] = useState(false);
    
        return (
            <div>
                <h1>Status da entrega</h1>

                {pendente && <p>Pendente</p>}
                {transito && <p>Trânsito</p>}
                {entregue && <p>Entregue</p>}

                <button onClick={() => setPendente(!pendente)}>
                    pendente
                </button>
                <button onClick={() => setTransito(!transito)}>
                    transito
                </button>
                <button onClick={() => setEntregue(!entregue)}>
                    entregue
                </button>
            </div>
        );
    }

export default StatusEntrega;
