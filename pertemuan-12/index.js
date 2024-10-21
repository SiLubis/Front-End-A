//1
function calculateAge(birthYear){
    return 2019 - birthYear;
    }
    
    function yearUntilRetirement(object){
        var age = calculateAge(object.year);
         var retirement = 60 - age;
    }
    if(retirement > 0){
        console.log(${firstName} retires in ${retirement} years) 
        console.log(${firstName} is already retired.);
      }
    
    yearUntilRetirement({year: 1987, firstName: 'John'});
    
    //2.
    const addNumber = (numbers) => numbers.reduce((sum, num) => sum + num, 0);
    
    console.log(addNumber(1,2,3,4,5,6,7));
    
    //3.
    
    let phi = 3.14;
    let power = 2;
    let radius = 0;
    
    var calculateArea = function (obj) {
        return phi * Math.pow(obj.radius, obj.power);
      };
      
      radius = 21;
      let area21 = calculateArea({radius: radius, power: 2 });
      
      radius = 7;
      var area7 = calculateArea({radius: radius, power: 2 });
      
      console.log('area with 21 radius: ' + area21 + ', and area with 7 radius: ' + area7);
      
      // 4.
      const makeAjaxRequest = (url, method = 'GET') => {
      console.log(url, method);
      }
      
       makeAjaxRequest('www.google.com');    