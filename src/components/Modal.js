import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }){
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        // When modal being removed, need to remove the class
        return ()=>{
            document.body.remove('overflow-hidden');
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-gray-400 opacity-80" onClick={onClose}></div>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {children}
                </div>
                <div className="flex justify-end">
                    {actionBar}
                </div>
            </div>
        </div>,

        document.querySelector('.modal-container')
    )
}

export default Modal;