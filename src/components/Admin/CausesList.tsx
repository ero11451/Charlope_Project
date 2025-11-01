"use client";

import React from "react";

// Define the shape of a cause
export interface Cause<IdType> {
  id: IdType;
  title: string;
  description: string;
  category: string;
  percentage: string;
  raised: string;
  goal: string;
}

// Define the props for the component
interface CausesListProps {
  causes: Cause<string>[];
  handleDelete: (id: number | string) => void;
  handleEdit: (cause: Cause<string>) => void;
}

const CausesList: React.FC<CausesListProps> = ({
  causes,
  handleDelete,
  handleEdit,
}) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Percentage</th>
            <th>Raised</th>
            <th>Goal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {causes.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.category}</td>
              <td>{c.percentage}</td>
              <td>{c.raised}</td>
              <td>{c.goal}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(c)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CausesList;
