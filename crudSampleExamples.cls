public class crudSampleExamples {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        System.debug([SELECT Name, id, Rating FROM Account limit 15]);
        return [SELECT Name, id, Rating FROM Account limit 15];
    }
    
    
  @AuraEnabled(cacheable=true)
    public static List<Account> SearchingSelectedValue(String searchWord){
        searchWord = '%' + searchWord + '%';
        System.debug([Select ID, Name, Industry From Account where name like:searchWord]);
        return [Select ID, Name, Industry From Account where name like :searchWord];
    }
}
