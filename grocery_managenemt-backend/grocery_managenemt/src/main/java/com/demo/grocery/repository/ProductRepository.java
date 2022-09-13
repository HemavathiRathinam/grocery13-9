package com.demo.grocery.repository;

import com.demo.grocery.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductModel, Integer> {
//    Optional<ProductModel> findProductModelByName(String prodName);
}

