export default function MeetingsList({meetings, username,  onDelete, onJoin, onExit}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>

                    <td>
                        {meeting.participants && meeting.participants.length > 0
                            ? meeting.participants.map(p => p.login).join(", ")
                            : "Brak uczestników"}
                    </td>
                    <td>
                        {!meeting.participants.some(p => p.login === username) && (
                            <button onClick={() => onJoin(meeting, username)}>Zapisz się</button>
                        )}
                        {meeting.participants.length === 0 && (<button className="button button-outline logout-btn" onClick={() => onDelete(meeting)}>Usuń</button>)}

                        {meeting.participants.some(p => p.login === username) && (
                            <button onClick={() => onExit(meeting, username)}>Wypisz się</button>
                        )}
                    </td>

                </tr>)
            }
            </tbody>
        </table>
    );
}



