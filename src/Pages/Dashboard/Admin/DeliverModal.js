import React from 'react';

const DeliverModal = ({ deliver, setDeliver }) => {
    const { buyerName, _id } = deliver;

    const handleDeliver = () => {
        const deliveryStatus = {
            delivery: false
        }
        fetch(`https://driller-tools.herokuapp.com/purchased/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(deliveryStatus)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <input type="checkbox" id="deliver-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h2 className='text-2xl font-bold'>Hey {buyerName.toUpperCase()} </h2>
                    <h3 className="font-bold text-lg">Are you ready to deliver ? <br /> <span className=' text-secondary'>{_id}</span></h3>
                    <div className="modal-action">
                        <button onClick={handleDeliver} className="btn btn-xs btn-secondary">Deliver</button>
                        <label htmlFor="deliver-confirm-modal" className="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeliverModal;