"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import CausesList from '@/components/Admin/CausesList';
import AddCauseForm from '@/components/Admin/AddCauseForm';
import TabsExample from '@/components/Admin/TabsExample';
import MessagesPage from '@/components/Admin/MessagesPage';

export default function Admin() {
    const router = useRouter();
    const [causes, setCauses] = useState([]);
    const [form, setForm] = useState({ title: "", description: "", category: "", percentage: "", raised: "", goal: "" });
    const [editId, setEditId] = useState(null);
    const tabs = [
        {
            id: "home",
            title: "Home",
            content: <p>Welcome to the home tab!</p>,
        },
        {
            id: "about",
            title: "About",
            content: <p>This tab tells you about the app.</p>,
        },
        {
            id: "contact",
            title: "Contact",
            content: (
                <p>
                    Reach us at <strong>contact@example.com</strong>
                </p>
            ),
        },
    ];

    const fetchCauses = async () => {
        const res = await fetch("/api/causes");
        const data = await res.json();
        setCauses(data);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("token"); // Example: token stored in localStorage
        if (!isLoggedIn) {
            router.push("/login"); // Redirect if not authenticated
        }
        fetchCauses();
    }, []);

    const handleSubmit = async () => {
        if (editId) {
            await fetch("/api/causes", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: editId, ...form }),
            });
            setEditId(null);
        } else {
            await fetch("/api/causes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
        }
        setForm({ title: "", description: "", category: "", percentage: "", raised: "", goal: "" });
        fetchCauses();
    };

    const handleEdit = (cause: any) => {
        setEditId(cause.id);
        setForm(cause);
    };

    const handleDelete = async (id: any) => {
        await fetch("/api/causes", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        fetchCauses();
    };

    return (
        <div className="container my-5">
            <h1 className="mb-4">Admin</h1>
            <TabsExample tabs={[{
                id: "Cause",
                title: "AddCauseForm",
                content: <>
                 <AddCauseForm editId={editId} setForm={setForm} handleSubmit={handleSubmit} form={form} />
                 <CausesList causes={causes} handleEdit={handleEdit} handleDelete={handleDelete} />
                 </> 
            },{
                id: "Contact",
                title: "Contact Messages",
                content:<><MessagesPage /></>
            }]} defaultActiveId={"Cause"} />

           
        </div>
    );
}
