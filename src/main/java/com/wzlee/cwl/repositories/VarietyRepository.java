package com.wzlee.cwl.repositories;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;

import com.wzlee.cwl.domain.Variety;

public interface VarietyRepository extends CrudRepository<Variety, Serializable> {
}
