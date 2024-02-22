import { ScheduleEvent } from '../Data/events';
import './Schedule.css'

interface Props {
    events: ScheduleEvent[]
}

const Schedule = ({ events }: Props) => {
    return (
        <div className="schedule">
            <h3>SCHEDULE</h3>
            <table>
                <tbody>

                    {
                        events.map(event => (
                            <tr key={event.id}>
                                <td>{event.date}</td>
                                <td>{event.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    );
}

export default Schedule;