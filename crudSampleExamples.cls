public class crudSampleExamples {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> accList =[Select Id,Name,Industry,Rating,Phone FROM Account limit 10];
        return accList;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> SearchingSelectedValue(String searchWord){
        searchWord = '%' + searchWord + '%';
        System.debug([Select ID, Name, Industry From Account where name like:searchWord limit 1]);
        return [Select ID, Name, Industry From Account where name like :searchWord];
    }
    
	@AuraEnabled(cacheable=true)
    public static void addAccounts(String accountName){
        try{
            Account acc = new Account();
            acc.Name = accountName;
            insert acc;
        }catch(Exception e){
            System.debug(e);
        }
        
    }
    
   
}
