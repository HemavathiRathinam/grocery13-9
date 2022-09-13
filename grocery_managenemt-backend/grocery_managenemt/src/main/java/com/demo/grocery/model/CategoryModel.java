package com.demo.grocery.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="category")
public class CategoryModel implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false,updatable = false)
    private int categoryId;
    private String categoryName;
    private String parentCategory;

    public CategoryModel() {
    }

    public CategoryModel(int categoryId, String categoryName, String parentCategory) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.parentCategory = parentCategory;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getParentCategory() {
        return parentCategory;
    }

    public void setParentCategory(String parentCategory) {
        this.parentCategory = parentCategory;
    }

    @Override
    public String toString() {
        return "CategoryModel{" +
                "categoryId=" + categoryId +
                ", categoryName='" + categoryName + '\'' +
                ", parentCategory='" + parentCategory + '\'' +
                '}';
    }
}
