export default function MeetingsList({meetings, username,  onDelete, onJoin}) {
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
                            ? meeting.participants.join(", ")
                            : "Brak uczestników"}
                    </td>
                    <td>
                        <button onClick={() => onJoin(meeting, username)}>Zapisz się</button>
                        <button onClick={() => onDelete(meeting)}>Usuń</button>
                    </td>

                </tr>)
            }
            </tbody>
        </table>
    );
}



