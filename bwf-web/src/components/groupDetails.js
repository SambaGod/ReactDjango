import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchGroup } from '../hooks/fetchGroup';

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
                {group.events.map(event => {return (
                  <ul key={event.id}>
                    <li>
                      <strong>{event.team1}</strong> VS <strong>{event.team2}</strong>
                    </li>
                  </ul>
                )})}
            </>
            }
        </div>
    )
}
