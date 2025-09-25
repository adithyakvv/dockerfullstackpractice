import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MemberForm from './MemberForm';
import MemberList from './MemberList';
import config from './config.js';

const MemberManager = () => {
    const [members, setMembers] = useState([]);
    const [member, setMember] = useState({
        id: '', name: '', gender: '', membershipType: '',
        email: '', contact: '', fee: ''
    });
    const [idToFetch, setIdToFetch] = useState('');
    const [fetchedMember, setFetchedMember] = useState(null);
    const [message, setMessage] = useState('');
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetchAllMembers();
    }, []);

    const fetchAllMembers = async () => {
        try {
            const res = await axios.get(`${config.url}/all`);
            setMembers(res.data);
        } catch (error) {
            setMessage('Error: Failed to fetch members.');
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setMember({ ...member, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        // This validation correctly checks that all fields, including 'id', are filled.
        for (let key in member) {
            if (!member[key] || member[key].toString().trim() === '') {
                setMessage(`Error: Please fill out the '${key}' field.`);
                return false;
            }
        }
        return true;
    };

    const addMember = async () => {
        if (!validateForm()) return;
        try {
            await axios.post(`${config.url}/add`, member);
            setMessage('Member added successfully.');
            fetchAllMembers();
            resetForm();
        } catch (error) {
            // This error message correctly appears when the database rejects the data (e.g., duplicate ID).
            setMessage('Error adding member. It might be a duplicate ID or Email.');
            console.error(error);
        }
    };

    const updateMember = async () => {
        if (!validateForm()) return;
        try {
            await axios.put(`${config.url}/update`, member);
            setMessage('Member updated successfully.');
            fetchAllMembers();
            resetForm();
        } catch (error) {
            setMessage('Error updating member.');
            console.error(error);
        }
    };

    const deleteMember = async (id) => {
        try {
            const res = await axios.delete(`${config.url}/delete/${id}`);
            setMessage(res.data);
            fetchAllMembers();
        } catch (error) {
            setMessage('Error deleting member.');
            console.error(error);
        }
    };

    const getMemberById = async () => {
        if (!idToFetch) {
            setMessage('Please enter an ID to fetch.');
            return;
        }
        try {
            const res = await axios.get(`${config.url}/get/${idToFetch}`);
            setFetchedMember(res.data);
            setMessage('Member found.');
        } catch (error) {
            setFetchedMember(null);
            setMessage('Member not found.');
            console.error(error);
        }
    };

    const handleEdit = (mem) => {
        setMember(mem);
        setEditMode(true);
        setMessage(`Editing member with ID: ${mem.id}`);
    };

    const resetForm = () => {
        setMember({
            id: '', name: '', gender: '', membershipType: '',
            email: '', contact: '', fee: ''
        });
        setEditMode(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Gym Membership Management System</h2>
            {message && <p style={{ color: message.toLowerCase().includes('error') ? 'red' : 'green' }}>{message}</p>}
            <hr />
            <MemberForm
                member={member}
                editMode={editMode}
                handleChange={handleChange}
                addMember={addMember}
                updateMember={updateMember}
                resetForm={resetForm}
            />
            <hr />
            <div>
                <h3>Get Member By ID</h3>
                <input
                    type="number"
                    value={idToFetch}
                    onChange={e => setIdToFetch(e.target.value)}
                    placeholder="Enter ID"
                />
                <button onClick={getMemberById}>Fetch</button>
                {fetchedMember && (
                    <div>
                        <h4>Member Found:</h4>
                        <pre style={{ background: '#f4f4f4', padding: '10px' }}>{JSON.stringify(fetchedMember, null, 2)}</pre>
                    </div>
                )}
            </div>
            <hr />
            <MemberList
                members={members}
                handleEdit={handleEdit}
                deleteMember={deleteMember}
            />
        </div>
    );
};

export default MemberManager;