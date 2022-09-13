package com.demo.grocery.service;

import com.demo.grocery.exception.ProductNotFoundException;
import com.demo.grocery.model.ProductModel;
import com.demo.grocery.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private static ProductRepository productRepository=null;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository=productRepository;
    }

    public static ProductModel addProduct(ProductModel data){
        return productRepository.save(data);

    }
    public static List<ProductModel> findAllProductModel(){

        return productRepository.findAll();
    }

//    public static ProductModel findProductModelByName(String prodName){
//        return productRepository.findProductModelByName(prodName).
//                orElseThrow(()-> new ProductNotFoundException("product not found"));
//    }
public ProductModel getProductsById(int id)
{
    return productRepository.findById(id).get();
}
    public ProductModel updateProduct(ProductModel prod)
    {
        int prodId=prod.getProdId();
        ProductModel add=productRepository.findById(prodId).get();
        add.setProdName(prod.getProdName());
        add.setProdPrice(prod.getProdPrice());
        add.setProdDiscount(prod.getProdDiscount());
        add.setProdWeight(prod.getProdWeight());
        add.setProdImg(prod.getProdImg());
        add.setProdCategory(prod.getProdCategory());
        return productRepository.save(add);
    }

    public void deleteProduct(int prodId)
    {

        productRepository.deleteById(prodId);
    }
}
