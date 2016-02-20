public class ContactSearchController {

    @AuraEnabled
    public static List<Contact> getContacts(String searchTerm) {
        System.debug('searchTerm=' + searchTerm);
        return [
            SELECT Id, Name, Email, MobilePhone 
            FROM Contact
            WHERE Name LIKE :searchTerm + '%'
        ];
    }
}