package com.demo.grocery.repository;

import com.demo.grocery.model.AddToCartModel;
import com.demo.grocery.model.CategoryModel;
import com.demo.grocery.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AddtocartRepo extends JpaRepository<AddToCartModel, Integer> {



     List<AddToCartModel> findUserById(int id);
}
