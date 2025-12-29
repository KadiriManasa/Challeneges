function fetchdata(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let success = true;
            if (success){
                resolve ("Data fetched Scessfully");
            }
            else{
                reject ( "Error ");
            }
        }, 4000);

    });
}
fetchdata()
    .then((data) => {
        console.log(data);
        return data.toLowerCase()})

    .catch((error) => console.error(error));
    