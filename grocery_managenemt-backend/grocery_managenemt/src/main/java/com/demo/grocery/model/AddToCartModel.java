package com.demo.grocery.model;

import javax.persistence.*;

@Entity
@Table(name="cartdetails")
public class AddToCartModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private int cartId;

    private String username;
    private String prodName;
    private int prodPrice;
    private int prodquantity;
    private String prodWeight;
    private String prodImg;
    private int subtotal;
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public AddToCartModel(int cartId, String username, String prodName, int prodPrice, int prodquantity, String prodWeight, String prodImg, int subtotal, int id) {
        this.cartId = cartId;
        this.username = username;
        this.prodName = prodName;
        this.prodPrice = prodPrice;
        this.prodquantity = prodquantity;
        this.prodWeight = prodWeight;
        this.prodImg = prodImg;
        this.subtotal = subtotal;
        this.id = id;
    }

    public int getCartId() {
        return cartId;
    }

    public void setCartId(int cartId) {
        this.cartId = cartId;
    }

    public String getUsername() {
        return username;
    }



    public void setUsername(String username) {
        this.username = username;
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

    public int getProdquantity() {
        return prodquantity;
    }

    public void setProdquantity(int prodquantity) {
        this.prodquantity = prodquantity;
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

    public int getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(int subtotal) {
        this.subtotal = subtotal;
    }



    public AddToCartModel(){

    }

    @Override
    public String toString() {
        return "AddToCartModel{" +
                "cartId=" + cartId +
                ", username='" + username + '\'' +
                ", prodName='" + prodName + '\'' +
                ", prodPrice=" + prodPrice +
                ", prodquantity=" + prodquantity +
                ", prodWeight='" + prodWeight + '\'' +
                ", prodImg='" + prodImg + '\'' +
                ", subtotal=" + subtotal +
                ", id=" + id +
                '}';
    }
}
