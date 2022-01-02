import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { getGroup } from '../services/groupServices';

export default function GroupDetails() {
  const{ id } = useParams(); 
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
      const getGroups = async () => {
        await getGroup(id).then(data => {
            setLoading(false);
            setGroup(data);
        }).catch(
        e => {
            setError(true);
            setLoading(false);
        }
        )
      }
      getGroups();
    }, []);

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
            </>
            }
        </div>
    )
}
