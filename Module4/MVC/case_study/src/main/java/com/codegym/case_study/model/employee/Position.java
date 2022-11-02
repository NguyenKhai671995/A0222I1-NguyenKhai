package com.codegym.case_study.model.employee;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "position")
public class Position {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", columnDefinition = "varchar(45)")
    private String name;

    @OneToMany(mappedBy = "position",fetch = FetchType.LAZY)
    List<Employee> list;

    public Position(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
