package com.demo.grocery.controller;

import com.demo.grocery.model.ProductModel;
import com.demo.grocery.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/admin")
public class ProductController {

        private final ProductService productService;


        public ProductController(ProductService productService) {
            this.productService = productService;
        }
        @GetMapping("/getProducts")
        public ResponseEntity<List<ProductModel>> getProduct(){
            List<ProductModel> productModels=productService.findAllProductModel();
            //System.out.println(new ResponseEntity(productModels, HttpStatus.OK));
            return new ResponseEntity<>(productModels, HttpStatus.OK);
        }
//        @GetMapping("/products/{prodName}")
//        public ResponseEntity<List<ProductModel>> getProductByName(@PathVariable("prodName") String prodName){
//            ProductModel productModels=productService.findProductModelByName(prodName);
//            return new ResponseEntity(productModels, HttpStatus.OK);
//        }
@GetMapping("/getProduct/{prodId}")
private ProductModel getProductsById(@PathVariable("prodId") int prodId)
{
    return productService.getProductsById(prodId);
}
        @PostMapping("/addProduct")
        public ResponseEntity<ProductModel> addProduct(@RequestBody ProductModel data){
            ProductModel newProductModel=productService.addProduct(data);
            return new ResponseEntity(newProductModel, HttpStatus.CREATED);
        }


        @PutMapping("/updateProduct")
        public ProductModel updateProduct(@RequestBody ProductModel add)
        {

            return productService.updateProduct(add);
        }
        @DeleteMapping("/deleteProduct/{prodId}")
        public void deleteProduct(@PathVariable("prodId") int prodId)
        {
            productService.deleteProduct(prodId);
        }


    }
