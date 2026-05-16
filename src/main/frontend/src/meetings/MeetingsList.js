export default function MeetingsList({meetings, onDelete}) {
    ///<button onClick={() => setAddingNewMeeting(true)}>Dodaj nowe spotkanie</button>

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
                    <td></td>
                    <td>
                        <button>Zpisz się</button>
                        <button onClick={() => onDelete(meeting)}>Usuń</button>
                    </td>

                </tr>)
            }
            </tbody>
        </table>
    );
}



