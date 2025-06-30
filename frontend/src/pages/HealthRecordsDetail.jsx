import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function HealthRecordDetail() {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/health-records/${id}`)
      .then(res => res.json())
      .then(data => {
        setRecord(data.data || data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!record) return <p>Record not found.</p>;

  return (
    <div>
      <h2>Health Record Detail</h2>
      <pre>{JSON.stringify(record, null, 2)}</pre>
      <Link to={`/records/${id}/edit`}>Edit Record</Link>
    </div>
  );
}
