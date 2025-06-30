import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AddEditRecord() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (id) {
      fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/health-records/${id}`)
        .then(res => res.json())
        .then(record => {
          setTitle(record.title || "");
          setData(record.data || "");
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = id ? "PUT" : "POST";
    const url = `${import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"}/api/health-records${id ? `/${id}` : ""}`;
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, data }),
    });
    if (res.ok) {
      setMsg("Saved!");
      setTimeout(() => navigate("/records"), 1000);
    } else {
      setMsg("Error saving record.");
    }
  };

  return (
    <div>
      <h2>{id ? "Edit" : "Add"} Health Record</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={data} onChange={e => setData(e.target.value)} placeholder="Details" required />
        <button type="submit">{id ? "Update" : "Create"}</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
