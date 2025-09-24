package com.klef.dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.dev.entity.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer> 
{
	// Custom finder method to find a member by their email
	public Member findByEmail(String email);
	
	// Custom finder method to find a member by their contact number
	public Member findByContact(String contact);
}