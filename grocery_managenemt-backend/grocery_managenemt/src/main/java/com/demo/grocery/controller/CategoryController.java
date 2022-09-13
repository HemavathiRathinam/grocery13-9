package com.demo.grocery.controller;

import com.demo.grocery.model.CategoryModel;
import com.demo.grocery.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class CategoryController {

    private final CategoryService categoryService;


    public CategoryController(CategoryService categoryService) {
        this.categoryService=categoryService;
    }

    @GetMapping("/getCategory")
    public ResponseEntity<List<CategoryModel>> getCategory(){
        List<CategoryModel> categoryModels=categoryService.findAllCategoryModel();
        System.out.println(new ResponseEntity(categoryModels, HttpStatus.OK));
        return new ResponseEntity<>(categoryModels, HttpStatus.OK);
    }
    //        @GetMapping("/products/{prodName}")
//        public ResponseEntity<List<ProductModel>> getProductByName(@PathVariable("prodName") String prodName){
//            ProductModel productModels=productService.findProductModelByName(prodName);
//            return new ResponseEntity(productModels, HttpStatus.OK);
//        }
    @PostMapping("/addCategory")
    public ResponseEntity<CategoryModel> addCategory(@RequestBody CategoryModel data){
        CategoryModel newCategoryModel=categoryService.addCategory(data);
        return new ResponseEntity(newCategoryModel, HttpStatus.CREATED);
    }


    @PutMapping("/updateCategory")
    public CategoryModel updateCategory(@RequestBody CategoryModel add)
    {
        return categoryService.updateCategory(add);
    }
    @DeleteMapping("/deleteCategory/{categoryId}")
    public void deleteCategory(@PathVariable("categoryId") int categoryId)
    {
        categoryService.deleteCategory(categoryId);
    }


}

