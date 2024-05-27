//question1 : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class movie{
  
    constructor(title,studio,rating="PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    getrating(){
    return`${this.rating}`
    }
    }
    
    var c1 = new movie("Casino Royale","Eon Productions","PG13");
    var c2 = new movie("Casino Royale","Eon Productions");
    console.log(c1.title);
    console.log(c1.studio);
    console.log(c1.rating);
    
    console.log(c2.rating);

 //question2 : https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
 
 class circle{
  
    constructor(radius, color){
          this.radius = radius;
          this.color = color;
      
    }
    get radiuscircle(){
    return this.radius;
    }
    set radiuscircle(radius){
    this.radius = radius;
    }
    get colorcircle(){
    return this.color;
    }
    set colorcircle(color){
    this.color = color;
    }
    get tostring(){
      return `"circle[radius=${this.radius},color=${this.color}]"`
    }
    get Areacircle(){
      return Math.PI * this.radius * this.radius;
    }
    get circumferencecircle(){
      return 2 * Math.PI * this.radius;
    }  
    }
    
    var c1 = new circle(1.0,"red");
    console.log(c1.radiuscircle);
    c1.radiuscircle = 2.2
    console.log(c1.radiuscircle);
    
    console.log(c1.colorcircle);
    c1.colorcircle = "blue"
    console.log(c1.colorcircle);
    
    console.log(c1.tostring);
    console.log(c1.Areacircle);
    console.log(c1.circumferencecircle);

 //question3 : Write a “person” class to hold all the details.

 class person{
    constructor(name,age,gender,place,qualification){
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.place = place;
      this.qualification = qualification;
    }
  getname(){
    return `The name is ${this.name}`
  }
  setplace(place){
  this.place = place
  return this.place;
  }
    
  } 
    
  var person1 = new person("alexa",23,"female","cbe","bsc(ct)");
  var person2 = new person("aravind",25,"male","chennai","bccom");
  var person3 = new person("keerthi",2,"female","banglore","mba");
  
  console.log((person1.name),(person1.age),(person1.gender),(person1.place),(person1.qualification));
  
  console.log((person2.name),(person2.age),(person2.gender),(person2.place),(person2.qualification));
  
  console.log(person3.name);
  console.log(person3.age);
  console.log(person3.gender);
  console.log(person3.place);
  console.log(person3.qualification);
  
  console.log(`All the Person Names are "person1" : ${person1.name}
  "person2":${person2.name}
  "person3":${person3.name}`)

 //question4 : write a class to calculate the Uber price.

 class UberPriceCalculator {
    constructor() {
      this.baseFare = 60;
      this.costPerKilometer = 15;
      this.costPerMinute = 2.5;
      this.bookingFee = 30;
    }

    calculatePrice(distanceInKilometers, timeInMinutes) {
      // Calculate the fare based on distance and time
      const distanceCost = this.costPerKilometer * distanceInKilometers;
      const timeCost = this.costPerMinute * timeInMinutes;

      // Calculate the total price
      const totalPrice = this.baseFare + distanceCost + timeCost + this.bookingFee;

      return totalPrice;
    }
  }

  // Example usage:
  const calculator = new UberPriceCalculator();
  const distanceInKilometers = 6.0; // Distance in kilometers
  const timeInMinutes = 10; // Time in minutes

  const estimatedPriceINR = calculator.calculatePrice(distanceInKilometers, timeInMinutes);
  console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);


 
