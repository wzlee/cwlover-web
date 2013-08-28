package com.wzlee.cwl.repositories;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;

import com.wzlee.cwl.domain.Pet;

public interface PetRepsoitory extends CrudRepository<Pet, Serializable> {
}
