package com.klef.dev.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klef.dev.entity.Member;
import com.klef.dev.service.MemberService;

@RestController
@RequestMapping("/gymapi") // A common practice is to have a base path for your API
@CrossOrigin(origins = "*")    // Allows requests from any frontend
public class MemberController 
{
	@Autowired
	private MemberService memberService;
	@GetMapping("/base")
    public String home() 
    {
        return "Full Stack Deployment Demo";
    }
	
	@PostMapping("/add")
	public ResponseEntity<Member> addMember(@RequestBody Member member)
	{
		Member savedMember = memberService.addMember(member);
		// Returns the saved member object and an HTTP 201 Created status
		return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Member>> getAllMembers()
	{
		List<Member> members = memberService.getAllMembers();
		// Returns the list of members and an HTTP 200 OK status
		return new ResponseEntity<>(members, HttpStatus.OK);
	}
	
	@GetMapping("/get/{id}")
	public ResponseEntity<?> getMemberById(@PathVariable("id") int id)
	{
		Member member = memberService.getMemberById(id);
		if (member != null) {
			// If member is found, return the object and HTTP 200 OK
			return new ResponseEntity<>(member, HttpStatus.OK);
		} else {
			// If not found, return an error message and HTTP 404 Not Found
			return new ResponseEntity<>("Member with ID " + id + " not found.", HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/update")
	public ResponseEntity<?> updateMember(@RequestBody Member member)
	{
		Member existingMember = memberService.getMemberById(member.getId());
		if (existingMember != null) {
			Member updatedMember = memberService.updateMember(member);
			// If member exists, update and return the updated object with HTTP 200 OK
			return new ResponseEntity<>(updatedMember, HttpStatus.OK);
		} else {
			// If not found, return an error message and HTTP 404 Not Found
			return new ResponseEntity<>("Cannot update. Member with ID " + member.getId() + " not found.", HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteMember(@PathVariable("id") int id)
	{
		Member existingMember = memberService.getMemberById(id);
		if (existingMember != null) {
			memberService.deleteMemberById(id);
			// If member exists, delete it and return a success message with HTTP 200 OK
			return new ResponseEntity<>("Member with ID " + id + " deleted successfully.", HttpStatus.OK);
		} else {
			// If not found, return an error message and HTTP 404 Not Found
			return new ResponseEntity<>("Cannot delete. Member with ID " + id + " not found.", HttpStatus.NOT_FOUND);
		}
	}
}