"use client";

import React from 'react'

export default function CausesList({causes,handleDelete, handleEdit}:{causes:any, handleEdit:any, handleDelete:any}) {
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
                    {causes.map((c: any) => (
                        <tr key={c.id}>
                            <td> {c.title} </td>
                            <td> {c.description} </td>
                            <td>{c.category}</td>
                            <td>{c.percentage}</td>
                            <td>{c.raised}</td>
                            <td>{c.goal}</td>
                            <td>
                                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(c)}>
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}
