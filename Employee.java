@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String position;
    private Double salary;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    
}