import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HealthRecords() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/health-records`)
      .then(res => res.json())
      .then(data => {
        setRecords(data.data || data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Health Records</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {records.map(record => (
            <li key={record._id}>
              <Link to={`/records/${record._id}`}>{record.title || "Untitled Record"}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/records/new">Add New Record</Link>
    </div>
  );
}
