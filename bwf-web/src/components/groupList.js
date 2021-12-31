import React, {useState, useEffect} from 'react';

function GroupList() {

  const [groups, setGroups] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
      const getGroups = async () => {
        await fetch('http://127.0.0.1:8000/api/groups/')
        .then(res => res.json())
        .then( groups => {
          setGroups(groups);
          setLoading(false);
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
        {groups && groups.map(group => <p>{group.name} : {group.location} : {group.description}</p>)}
    </div>
  );
}

export default GroupList;
