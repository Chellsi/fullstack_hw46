// src/components/UsestateFetch.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleUsersVisibility } from '../redux/slices/visibilitySlice'
import { fetchUsers, clearUsers } from '../redux/slices/usersSlice'
import '../App.css'

export const UsestateFetch = () => {
    const dispatch = useAppDispatch()
    const isVisible = useAppSelector(state => state.visibility.isUsersVisible)
    const { data, loading, error } = useAppSelector(state => state.users)

    useEffect(() => {
        if (isVisible) {
            dispatch(fetchUsers())
        } else {
            dispatch(clearUsers())
        }
    }, [isVisible, dispatch])

    const handleToggle = () => {
        dispatch(toggleUsersVisibility())
    }

    return (
        <div>
            <button 
                onClick={handleToggle}
                className="bg-green-500 text-black rounded-md p-2"
            >
                {isVisible ? 'Hide Active Users' : 'Show Active Users'}
            </button>
            {isVisible && (
                <div className="mt-4">
                    {loading && <p>Loading...</p>}
                    {error && <p className="text-red-500">Error: {error}</p>}
                    {data.length > 0 && (
                        <div className="grid gap-2 mt-2">
                            {data.map((user: any) => (
                                <div key={user.id} className="p-2 bg-white rounded shadow">
                                    <div className="font-semibold">{user.name}</div>
                                    <div className="text-sm text-gray-600">{user.email}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}