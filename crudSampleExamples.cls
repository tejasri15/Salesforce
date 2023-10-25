public class crudSampleExamples {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        System.debug([SELECT Name, id, Rating FROM Account limit 15]);
        return [SELECT Name, id, Rating FROM Account limit 15];
    }

}
