import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchGroup } from '../hooks/fetchGroup';
import { DateTime } from 'luxon';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';

export default function GroupDetails() {
  const { id } = useParams();
  const [data, loading, error] = useFetchGroup(id);
  const [group, setGroup] = useState(null);

  useEffect(() => {
    setGroup(data);
  }, [data]);

    if (error) return <h1>Error</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div>
            { group &&
            <>
                <Link to="/">Back</Link>
                <h1>Details for Group {id}</h1>
                <p><strong>Name:</strong> {group.name}</p>
                <p><strong>Location:</strong> {group.location}</p>
                <p><strong>Description:</strong> {group.description}</p>

                <h2>Events</h2>
                {group.events.map(event => {
                  const format = "yyyy-MM-dd'T'HH:mm:ss'Z'";
                  const date = DateTime.fromFormat(event.time, format);
                  return (
                  <ul key={event.id}>
                    <li>
                      <p><strong>{event.team1}</strong> VS <strong>{event.team2}</strong></p>
                      <p><CalendarTodayIcon /> {date.toFormat('dd.MM.yyyy')}</p>
                      <p><ScheduleIcon /> {date.toFormat('HH:mm')}</p>
                    </li>
                  </ul>
                )})}
            </>
            }
        </div>
    )
}
