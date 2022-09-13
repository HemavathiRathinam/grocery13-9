package com.demo.grocery.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="products")
public class ProductModel implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private int prodId;
    private String prodName;
    private int prodPrice;
    private int prodDiscount;
    private String prodWeight;
    private String prodImg;
    private String prodCategory;

    public ProductModel(int prodId, String prodName, int prodPrice, int prodDiscount, String prodWeight, String prodImg, String prodCategory) {
        this.prodId = prodId;
        this.prodName = prodName;
        this.prodPrice = prodPrice;
        this.prodDiscount = prodDiscount;
        this.prodWeight = prodWeight;
        this.prodImg = prodImg;
        this.prodCategory = prodCategory;
    }

    public ProductModel() {
    }

    public int getProdId() {
        return prodId;
    }

    public void setProdId(int prodId) {
        this.prodId = prodId;
    }

    public String getProdName() {
        return prodName;
    }

    public void setProdName(String prodName) {
        this.prodName = prodName;
    }

    public int getProdPrice() {
        return prodPrice;
    }

    public void setProdPrice(int prodPrice) {
        this.prodPrice = prodPrice;
    }

    public int getProdDiscount() {
        return prodDiscount;
    }

    public void setProdDiscount(int prodDiscount) {
        this.prodDiscount = prodDiscount;
    }

    public String getProdWeight() {
        return prodWeight;
    }

    public void setProdWeight(String prodWeight) {
        this.prodWeight = prodWeight;
    }

    public String getProdImg() {
        return prodImg;
    }

    public void setProdImg(String prodImg) {
        this.prodImg = prodImg;
    }

    public String getProdCategory() {
        return prodCategory;
    }

    public void setProdCategory(String prodCategory) {
        this.prodCategory = prodCategory;
    }

    @Override
    public String toString() {
        return "ProductModel{" +
                "prodId=" + prodId +
                ", prodName='" + prodName + '\'' +
                ", prodPrice=" + prodPrice +
                ", prodDiscount=" + prodDiscount +
                ", prodWeight='" + prodWeight + '\'' +
                ", prodImg='" + prodImg + '\'' +
                ", prodCategory='" + prodCategory + '\'' +
                '}';
    }
}
