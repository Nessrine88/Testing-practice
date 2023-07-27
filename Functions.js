export const stringLength=(str)=> {
  if (str<1||str>10){
    throw new Error('String length must be between 1 and 10 characters.');
  };
  return str.length;
};

export const reverseString=(str) =>{
  return str.split('').reverse().join('');
}

export class Calculator {
  constructor(a,b){
    this.a=a;
    this.b=b;

  };
  add(){
    return this.a+this.b;
  }
  subtract(){
    return this.a - this.b;
  };
  divide(){
    return this.a/this.b;
  };
  multiply(){
   return this.a*this.b;
  }
}

export const capital=(str)=>{
  return str.charAt(0).toUpperCase()+str.slice(1);
}

