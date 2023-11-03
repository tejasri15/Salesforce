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
    
    public static void updateAccounts(String oldName, String newName){
        try{
              Account acc = [Select name from Account where name=:oldName limit 1];
              acc.Name = newName;
              update acc;
        }catch(Exception e){
            System.debug(e);
        }

    }
    
    public static void deleteAccounts(String name){
        try{
            Account acc = [Select name from Account where name=: name limit 10];
            delete acc;        
        }catch(Exception e){
            System.debug(e);
        }
    }
    
    public static void insertMultipleAccounts(String name, integer size){
        try{
			List<Account> newList = new List<Account>();
            for(integer i=0;i< size; i++){
                Account acc= new Account();
                acc.name = name+i+i+i;
                System.debug(acc.name + 'insert multiple accounts example');
                newList.add(acc);
            }        
            if(!newList.isEmpty())
				{
                   insert newList ;
                }
        } catch(Exception e){
            System.debug(e);
        }
    }
}