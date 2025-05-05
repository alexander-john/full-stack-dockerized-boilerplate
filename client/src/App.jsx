import { useEffect, useState } from 'react'

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/messages')
            .then(res => res.json())
            .then(setMessages)
            .catch(err => console.error('Fetch error:', err));
    }, []);

    return (
        <div>
            <h1>Messages from MongoDB</h1>
            <ul>
                {messages.map((msg) => (
                    <li key={msg._id}>{msg.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default App
