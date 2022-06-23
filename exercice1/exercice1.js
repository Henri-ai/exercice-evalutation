let age
let nbrj=0
let nbrm=0
let nbrv=0
do{

    age++;
    
    age=prompt("Entrez les âges successivement")

            if(age<20){
        
            nbrj++;

                            }if(age>20&&age<=40){

                            nbrm++; 
                                
                                            }else if(age>40){
                        
                                            nbrv++
                            
                                                            }
                
                                            }while(age<100)
            

            

    



        console.log("nombre de jeunes "+nbrj)
        console.log("nombre d'age moyen "+nbrm) 
        console.log("nombre de vieux "+nbrv)

















































