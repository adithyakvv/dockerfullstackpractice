import React from 'react';

const MemberList = ({ members, handleEdit, deleteMember }) => (
  <div>
    <h3>All Members</h3>
    {members.length === 0 ? (
      <p>No members found.</p>
    ) : (
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <thead>
          <tr style={{ background: '#f2f2f2' }}>
            <th style={{ padding: '8px' }}>ID</th>
            <th style={{ padding: '8px' }}>Name</th>
            <th style={{ padding: '8px' }}>Gender</th>
            <th style={{ padding: '8px' }}>Membership</th>
            <th style={{ padding: '8px' }}>Email</th>
            <th style={{ padding: '8px' }}>Contact</th>
            <th style={{ padding: '8px' }}>Fee</th>
            <th style={{ padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(mem => (
            <tr key={mem.id}>
              <td>{mem.id}</td>
              <td>{mem.name}</td>
              <td>{mem.gender}</td>
              <td>{mem.membershipType}</td>
              <td>{mem.email}</td>
              <td>{mem.contact}</td>
              <td>{mem.fee}</td>
              <td>
                <button onClick={() => handleEdit(mem)} style={{ marginRight: '5px' }}>Edit</button>
                <button onClick={() => deleteMember(mem.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default MemberList;