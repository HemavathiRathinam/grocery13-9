package com.demo.grocery.service;

import com.demo.grocery.model.CategoryModel;
import com.demo.grocery.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private static CategoryRepository categoryRepository=null;

    @Autowired
    public CategoryService(CategoryRepository categoryRepository) {

        this.categoryRepository=categoryRepository;
    }

    public static CategoryModel addCategory(CategoryModel data){
        return categoryRepository.save(data);

    }
    public static List<CategoryModel> findAllCategoryModel(){

        return categoryRepository.findAll();
    }

//    public static ProductModel findProductModelByName(String prodName){
//        return productRepository.findProductModelByName(prodName).
//                orElseThrow(()-> new ProductNotFoundException("product not found"));
//    }

    public CategoryModel updateCategory(CategoryModel categ)
    {
        int categoryId=categ.getCategoryId();
        CategoryModel add=categoryRepository.findById(categoryId).get();
        add.setCategoryName(categ.getCategoryName());
        add.setParentCategory(categ.getParentCategory());
        return categoryRepository.save(add);
    }

    public void deleteCategory(int categoryId)
    {

        categoryRepository.deleteById(categoryId);
    }
}
