

setTimeout(function first(){
    let x = "10";
    document.getElementById('display').innerHTML = x;
    setTimeout(function second(){
        let x = "9";
        document.getElementById('display').innerHTML = x;
        setTimeout(function third(){
            let x = "8";
            document.getElementById('display').innerHTML = x;
            setTimeout(function fourth(){
                let x = "7";
                document.getElementById('display').innerHTML = x;
                setTimeout(function fifth(){
                    let x = "6";
                    document.getElementById('display').innerHTML = x;
                    setTimeout(function sixth(){
                        let x = "5";
                        document.getElementById('display').innerHTML = x;
                        setTimeout(function seventh(){
                            let x = "4";
                            document.getElementById('display').innerHTML = x;
                            setTimeout(function eigth(){
                                let x = "3";
                                document.getElementById('display').innerHTML = x;
                                setTimeout(function ninth(){
                                    let x = "2";
                                    document.getElementById('display').innerHTML = x;
                                    setTimeout(function tenth(){
                                        let x = "1";
                                        document.getElementById('display').innerHTML = x;
                                        setTimeout(function message(){
                                            let x = "Happy Independence Day!";
                                            document.getElementById('display').innerHTML = x;
                                            
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
