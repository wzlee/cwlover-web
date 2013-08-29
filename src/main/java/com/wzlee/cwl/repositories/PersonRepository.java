package com.wzlee.cwl.repositories;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.wzlee.cwl.domain.Person;

public interface PersonRepository extends MongoRepository<Person, Serializable> {
	public List<Person> findPersonByUserName(String username);
}
