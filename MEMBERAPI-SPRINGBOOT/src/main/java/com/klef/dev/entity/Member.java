package com.klef.dev.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue; // Add this import
import jakarta.persistence.GenerationType; // Add this import
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "member_table")
public class Member {
    
    @Id
    @Column(name = "member_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY) // This new line fixes the error
    private int id;
    
    @Column(name = "member_name", nullable = false, length = 50)
    private String name;
    
    @Column(name = "member_gender", nullable = false, length = 10)
    private String gender;
    
    @Column(name = "membership_type", nullable = false, length = 20)
    private String membershipType; 
    
    @Column(name = "member_email", nullable = false, unique = true, length = 50)
    private String email;
    
    @Column(name = "member_contact", nullable = false, unique = true, length = 20)
    private String contact;
    
    @Column(name = "membership_fee", nullable = false)
    private double fee; 

    // Getters and Setters remain the same...
    
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMembershipType() {
        return membershipType;
    }

    public void setMembershipType(String membershipType) {
        this.membershipType = membershipType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public double getFee() {
        return fee;
    }

    public void setFee(double fee) {
        this.fee = fee;
    }

    @Override
    public String toString() {
        return "Member [id=" + id + ", name=" + name + ", gender=" + gender + ", membershipType=" + membershipType
                + ", email=" + email + ", contact=" + contact + ", fee=" + fee + "]";
    }
}