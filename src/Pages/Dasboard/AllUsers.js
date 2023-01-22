import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://fly-parts-server-40rrtmcya-protimsaha.vercel.app/users', {
        method: 'GET',
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Designation</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <User refetch={refetch} index={index} user={user} key={user._id}></User>)
                    }
                </table>
            </div>
        </div>
    );
};

export default AllUsers;