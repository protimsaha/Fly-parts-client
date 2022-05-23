import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    // const [users, setUsers] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [])
    return (
        <div>
            {users.map(user => console.log(user))}
        </div>
    );
};

export default AllUsers;