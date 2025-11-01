"use client";

import React from "react";

// Define the shape of your form data
interface CauseFormData {
  title: string;
  category: string;
  description: string;
  percentage: string;
  raised: string;
  goal: string;
}

// Define the props for the component
interface AddCauseFormProps {
  editId?: number | null | string;
  form: CauseFormData;
  setForm: React.Dispatch<React.SetStateAction<CauseFormData>>;
  handleSubmit: () => void;
}

const AddCauseForm: React.FC<AddCauseFormProps> = ({
  editId,
  form,
  setForm,
  handleSubmit,
}) => {
  return (
    <div>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">
            {editId ? "Edit Cause" : "Add Cause"}
          </h5>

          <div className="row g-2">
            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>

            <div className="col-md-6">
              <input
                className="form-control"
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
            </div>

            <div className="col-md-12">
              <input
                className="form-control"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Percentage"
                value={form.percentage}
                onChange={(e) =>
                  setForm({ ...form, percentage: e.target.value })
                }
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Raised"
                value={form.raised}
                onChange={(e) => setForm({ ...form, raised: e.target.value })}
              />
            </div>

            <div className="col-md-4">
              <input
                className="form-control"
                placeholder="Goal"
                value={form.goal}
                onChange={(e) => setForm({ ...form, goal: e.target.value })}
              />
            </div>
          </div>

          <button
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
            type="button"
          >
            {editId ? "Update Cause" : "Add Cause"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCauseForm;
