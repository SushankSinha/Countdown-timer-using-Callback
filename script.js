

setTimeout(function first(){
    // 
    document.getElementById('display').innerHTML = 10;
    setTimeout(function second(){
    
        document.getElementById('display').innerHTML = 9;
        setTimeout(function third(){
        
            document.getElementById('display').innerHTML = 8;
            setTimeout(function fourth(){
            
                document.getElementById('display').innerHTML = 7;
                setTimeout(function fifth(){
                
                    document.getElementById('display').innerHTML = 6
                    setTimeout(function sixth(){
                    
                        document.getElementById('display').innerHTML = 5;
                        setTimeout(function seventh(){
                        
                            document.getElementById('display').innerHTML = 4;
                            setTimeout(function eigth(){
                            
                                document.getElementById('display').innerHTML = 3;
                                setTimeout(function ninth(){
                                
                                    document.getElementById('display').innerHTML = 2;
                                    setTimeout(function tenth(){
                                    
                                        document.getElementById('display').innerHTML = 1;
                                        setTimeout(function message(){
                                            
                                            document.getElementById('display').innerHTML = "Happy Independence Day!";
                                            
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                        
                    }, 1000)
                }, 1000)
                
            }, 1000)
        }, 1000)
        
    }, 1000)
}, 1000)
