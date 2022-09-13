package com.demo.grocery.service;

import com.demo.grocery.exception.UserNotFoundException;
import com.demo.grocery.model.AddToCartModel;
import com.demo.grocery.model.User;
import com.demo.grocery.repository.AddtocartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AddtocartService {
    private static AddtocartRepo addtocartRepo=null;

    @Autowired
    public AddtocartService(AddtocartRepo addtocartRepo) {
        this.addtocartRepo=addtocartRepo;
    }

    public static AddToCartModel addtocart(AddToCartModel data){
        return addtocartRepo.save(data);

    }
    public static List<AddToCartModel> findAllcartModel(){

        return addtocartRepo.findAll();
    }
    public List<AddToCartModel> findUserById(int id){
        return addtocartRepo.findUserById(id);
                //.orElseThrow(()-> new UserNotFoundException("User by id "+id+" was not found"));
    }

//    public static ProductModel findProductModelByName(String prodName){
//        return productRepository.findProductModelByName(prodName).
//                orElseThrow(()-> new ProductNotFoundException("product not found"));
//    }

    public AddToCartModel update(AddToCartModel prod)
    {
        int cartId=prod.getCartId();
        AddToCartModel add=addtocartRepo.findById(cartId).get();
        add.setUsername(prod.getUsername());
        add.setProdName(prod.getProdName());
        add.setProdPrice(prod.getProdPrice());
        add.setProdquantity(prod.getProdquantity());
        add.setProdWeight(prod.getProdWeight());
        add.setProdImg(prod.getProdImg());
        add.setSubtotal(prod.getSubtotal());
        return addtocartRepo.save(add);
    }

    public void deleteProduct(int cartId)
    {

        addtocartRepo.deleteById(cartId);
    }
}
