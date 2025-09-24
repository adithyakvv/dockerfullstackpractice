package com.klef.dev.service;

import java.util.List;
import com.klef.dev.entity.Member;

public interface MemberService 
{
	public Member addMember(Member member);
	public List<Member> getAllMembers();
	public Member getMemberById(int id);
	public Member updateMember(Member member);
	public void deleteMemberById(int id);
}