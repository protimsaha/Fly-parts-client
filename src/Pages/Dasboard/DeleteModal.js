import axios from 'axios';

const DeleteModal = ({ deleteTool }) => {
    const { _id } = deleteTool

    const handleDelete = id => {
        console.log(id)
        axios.delete(`https://fly-parts-server-40rrtmcya-protimsaha.vercel.app/tools/${id}`)
            .then(res => console.log(res))

    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">If you once delete the item, it will be removed from your database.</h3>
                    <p className='text-xl text-red-600'>Are you confirm?</p>

                    <div class="modal-action">
                        <label onClick={() => handleDelete(_id)} for="my-modal-6" class="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;