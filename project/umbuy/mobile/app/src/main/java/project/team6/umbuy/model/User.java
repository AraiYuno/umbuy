package project.team6.umbuy.model;

public class User {

    private String userId;
    private String firstName;
    private String lastName;
    private String UmEmail;
    private String phoneNumber;

    public String getUserId(){
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
//        | userId      | varchar(50) | NO   | PRI | NULL    | auto_increment |
//        | firstName   | varchar(50) | NO   |     | NULL    |                |
//        | lastName    | varchar(50) | NO   |     | NULL    |                |
//        | UmEmail     | varchar(50) | NO   | UNI | NULL    |                |
//        | phoneNumber | varchar(50) | NO   |     | NULL    |                |