let  payeesDAO = {

 
    url:"http://localhost:8001/payees" ,
  get:(id) => {
    fetch(this.url+"/"+id).then((response) => {
      return  response.json();
    },(error) => {
      console.log('Error:',error);
    }
    );
  },
listall:() => {
  fetch(this.url).then((response)=>{
    return response.json();
  },(error)=>{
    console.log('Error',error);
  }
  );
}

}

