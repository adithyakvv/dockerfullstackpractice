import React from 'react';

const MemberForm = ({ member, editMode, handleChange, addMember, updateMember, resetForm }) => (
  <div>
    <h3>{editMode ? 'Edit Member Details' : 'Add New Member'}</h3>
    <div>
      <input type="number" name="id" placeholder="ID" value={member.id} onChange={handleChange} disabled={editMode} style={{ marginRight: '10px', marginBottom: '10px' }} />
      <input type="text" name="name" placeholder="Name" value={member.name} onChange={handleChange} style={{ marginRight: '10px', marginBottom: '10px' }} />
      <select name="gender" value={member.gender} onChange={handleChange} style={{ marginRight: '10px', marginBottom: '10px' }}>
        <option value="">Select Gender</option>
        <option value="MALE">MALE</option>
        <option value="FEMALE">FEMALE</option>
      </select>
      <select name="membershipType" value={member.membershipType} onChange={handleChange} style={{ marginRight: '10px', marginBottom: '10px' }}>
        <option value="">Select Membership</option>
        <option value="Basic">Basic</option>
        <option value="Premium">Premium</option>
        <option value="VIP">VIP</option>
      </select>
      <input type="email" name="email" placeholder="Email" value={member.email} onChange={handleChange} style={{ marginRight: '10px', marginBottom: '10px' }} />
      <input type="text" name="contact" placeholder="Contact" value={member.contact} onChange={handleChange} style={{ marginRight: '10px', marginBottom: '10px' }} />
      <input type="number" name="fee" placeholder="Fee" value={member.fee} onChange={handleChange} step="0.01" style={{ marginRight: '10px', marginBottom: '10px' }}/>
    </div>
    <div>
      {!editMode ? (
        <button onClick={addMember}>Add Member</button>
      ) : (
        <>
          <button onClick={updateMember}>Update Member</button>
          <button onClick={resetForm} style={{ marginLeft: '10px' }}>Cancel</button>
        </>
      )}
    </div>
  </div>
);

export default MemberForm;