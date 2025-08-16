import React from "react";
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setStatus } from '../redux/slices/formSlice'
import '../App.css'

export const ControlledForm = () => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(state => state.form.status)

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setStatus(event.target.value))
    }

    return (
        <form className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
                Status:
                <select value={status} onChange={handleChange} className="border border-gray-300 rounded-md p-2 mb-4">
                    <option value="idle">Idle</option>
                    <option value="submitting">Submitting</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                </select>
            </label>
            <div className="text-sm text-gray-600">
                Current status: <span className="font-semibold">{status}</span>
            </div>
        </form>
    )
}