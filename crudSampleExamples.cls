public class crudSampleExamples {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){
        System.debug([SELECT Name, id, Rating FROM Account limit 15]);
        return [SELECT Name, id, Rating FROM Account limit 15];
    }
    
    
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