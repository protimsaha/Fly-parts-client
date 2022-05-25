import { useEffect, useState } from 'react';
import DeleteModal from './DeleteModal';

const ManageProducts = () => {
    const [deleteTool, setDeleteTool] = useState(false)

    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools])


    return (
        <div class="overflow-x-auto my-10 mx-auto w-4/5 ">
            <h2 className='text-2xl text-primary text-center'>Manage all products</h2>
            <table class="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product Name</th>
                        <th>Remove product</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tools?.map((tool, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{tool.name}</td>
                            <td>
                                <label onClick={() => setDeleteTool(tool)} for="my-modal-6" class="btn modal-button">open modal</label>
                            </td>
                            {deleteTool && <DeleteModal deleteTool={deleteTool}></DeleteModal>}
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;