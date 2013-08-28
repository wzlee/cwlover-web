package com.wzlee.cwl.repositories;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;

import com.wzlee.cwl.domain.Person;

public interface PersonRepsoitory extends CrudRepository<Person, Serializable> {
}
