import React, { useRef } from "react";
import '../App.css'

export const UncontrolledForm = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const enteredName = nameRef.current?.value;
        const enteredEmail = emailRef.current?.value;
        const enteredMessage = messageRef.current?.value;
        if (!enteredName || !enteredEmail || !enteredMessage) {
            alert("Please fill in all fields");
            return;
        }
        alert(enteredName + " " + enteredEmail + " " + enteredMessage);

        event.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="text" name="name" ref={nameRef} placeholder="Name" className="border border-gray-300 rounded-md p-2" />
            <input type="email" name="email" ref={emailRef} placeholder="Email" className="border border-gray-300 rounded-md p-2" />
            <input type="text" name="message" ref={messageRef} placeholder="Message" className="border border-gray-300 rounded-md p-2" />
            <button type="submit" className="bg-blue-500 rounded-md p-2">Submit</button>
        </form>
    )
}