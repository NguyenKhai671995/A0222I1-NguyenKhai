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
@Table(name = "division")
public class Division {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", columnDefinition = "varchar(45)")
    private String name;

    @OneToMany(mappedBy = "division", fetch = FetchType.LAZY)
    private List<Employee> list;

    public Division(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
