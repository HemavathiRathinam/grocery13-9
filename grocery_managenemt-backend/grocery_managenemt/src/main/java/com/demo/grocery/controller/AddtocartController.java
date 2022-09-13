package com.demo.grocery.controller;

import com.demo.grocery.model.AddToCartModel;

import com.demo.grocery.model.User;
import com.demo.grocery.service.AddtocartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class AddtocartController {

    @Autowired
    private final AddtocartService addtocartService;


    public AddtocartController(AddtocartService addtocartService) {
        this.addtocartService = addtocartService;
    }
    @GetMapping("/getcart")
    public ResponseEntity<List<AddToCartModel>> getcart(){
        List<AddToCartModel> productModels=addtocartService.findAllcartModel();
        //System.out.println(new ResponseEntity(productModels, HttpStatus.OK));
        return new ResponseEntity<>(productModels, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<List<AddToCartModel>> getUserById(@PathVariable("id") int id){
        List<AddToCartModel> user=addtocartService.findUserById(id);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
    //        @GetMapping("/products/{prodName}")
//        public ResponseEntity<List<ProductModel>> getProductByName(@PathVariable("prodName") String prodName){
//            ProductModel productModels=productService.findProductModelByName(prodName);
//            return new ResponseEntity(productModels, HttpStatus.OK);
//        }
    @PostMapping("/addtocart")
    public ResponseEntity<AddToCartModel> addProduct(@RequestBody AddToCartModel data){
        AddToCartModel newProductModel=addtocartService.addtocart(data);
        return new ResponseEntity(newProductModel, HttpStatus.CREATED);
    }


    @PutMapping("/updateCart")
    public AddToCartModel updateProduct(@RequestBody AddToCartModel add)
    {

        return addtocartService.update(add);
    }
    @DeleteMapping("/deleteCart/{cartId}")
    public void deleteProduct(@PathVariable("cartId") int cartId)
    {
       addtocartService.deleteProduct(cartId);
    }
}
