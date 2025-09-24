package com.klef.dev.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.klef.dev.entity.Member;
import com.klef.dev.repository.MemberRepository;

@Service
public class MemberServiceImpl implements MemberService
{
	@Autowired
	private MemberRepository memberRepository;

	@Override
	public Member addMember(Member member) 
	{
		return memberRepository.save(member);
	}

	@Override
	public List<Member> getAllMembers() 
	{
		return memberRepository.findAll();
	}

	@Override
	public Member getMemberById(int id) 
	{
		Optional<Member> opt = memberRepository.findById(id);
		
		if(opt.isPresent())
		{
			return opt.get();
		}
		else
		{
			return null;
		}
	}

	@Override
	public Member updateMember(Member member) 
	{
		return memberRepository.save(member);
	}

	@Override
	public void deleteMemberById(int id) 
	{
		memberRepository.deleteById(id);
	}

}