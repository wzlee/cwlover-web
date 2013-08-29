package com.wzlee.cwl.repositories;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;

import com.wzlee.cwl.domain.Pet;

public interface PetRepository extends CrudRepository<Pet, Serializable> {
}
