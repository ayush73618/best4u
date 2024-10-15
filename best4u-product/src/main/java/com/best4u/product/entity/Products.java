package com.best4u.product.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Products {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(nullable = false)
	    private String name;

	    @Column(nullable = false)
	    private String description;

	    @Column(nullable = false)
	    private Double price;

	    @Column(nullable = false)
	    private Integer quantity;
	    
	    @Column(nullable=false)
	    private String productType;

	    @Lob
	    @Column(nullable = false)
	    private byte[] image;

	    @Column(nullable = false)
	    private String imageType;

	    

}
