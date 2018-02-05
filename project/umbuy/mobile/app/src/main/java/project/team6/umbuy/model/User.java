package project.team6.umbuy.model;

public class User {

    private int userId;
    private String firstName;
    private String lastName;
    private String UmEmail;
    private String phoneNumber;

    public int getUserId(){
        return userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getUmEmail() {
        return UmEmail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }
}
//        | Field       | Type        | Null | Key | Default | Extra          |
//        +-------------+-------------+------+-----+---------+----------------+
//        | userId      | int(11)     | NO   | PRI | NULL    | auto_increment |
//        | firstName   | varchar(50) | NO   |     | NULL    |                |
//        | lastName    | varchar(50) | NO   |     | NULL    |                |
//        | UmEmail     | varchar(50) | NO   | UNI | NULL    |                |
//        | phoneNumber | varchar(50) | NO   |     | NULL    |                |