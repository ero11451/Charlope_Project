"use client";

import { useEffect, useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await fetch("/api/contact");
      const data = await res.json();
      setMessages(data);
    };
    fetchMessages();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📩 Contact Messages</h2>

      {messages.length === 0 ? (
        <div className="alert alert-info text-center">
          No messages yet.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Message</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((msg:any) => (
                <tr key={msg.id}>
                  <td>{msg.id}</td>
                  <td>{msg.full_name}</td>
                  <td>{msg.email}</td>
                  <td>{msg.phone_number}</td>
                  <td>{msg.message}</td>
                  <td>
                    {new Date(msg.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
