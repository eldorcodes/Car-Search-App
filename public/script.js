window.onload = function(){
 // carsArray yaratamiz
 let carsArray = [
     {
         make:'Toyota',
         model:'Camry',
         year:2014,
         used:true,
         image:'images/camry.jpeg'
     },
     {
        make:'Honda',
        model:'Accord',
        year:2021,
        used:true,
        image:'images/accord.jpeg'
    },
    {
        make:'Lincoln',
        model:'Navigator',
        year:2022,
        used:false,
        image:'images/navigator.jpeg'
    },
    {
        make:'Tesla',
        model:'X',
        year:2022,
        used:false,
        image:'images/x.jpeg'
    },
    {
        make:'BMW',
        model:'X7',
        year:2023,
        used:false,
        image:'images/x7.jpeg'
    },
 ]
 console.log(carsArray)
 // handle form submit
 let form = document.getElementById('form');
 

 form.addEventListener('submit',function(event){
    event.preventDefault();
    let searchInput = document.getElementById('search-input');
    console.log(searchInput.value)
    let cars = []
    carsArray.forEach((car) => {
        if (car.make.toUpperCase() === searchInput.value.toUpperCase()) {
            cars.push(car)
        }
    })
    console.log('CARS',cars.length)
    let filteredArray = cars.filter((car) => {
        return car.make.toUpperCase() === searchInput.value;
    })
    console.log(filteredArray)
    cars.forEach((car) => {
        if (car.make.toUpperCase() === searchInput.value.toUpperCase()) {
            console.log(car)
            let root = document.getElementById('root');
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            h1.textContent = car.make;
            let h2 = document.createElement('h2')
            h2.textContent = car.model;
            let h3 = document.createElement('h3');
            h3.textContent = car.year;
            let image = document.createElement('img');
            image.src = car.image;
            
            div.append(h1)
            div.append(h2)
            div.append(h3)
            div.append(image)
        
           root.replaceChildren(div)
            searchInput.value = '';
        } 
    })
 })

 // search filter
 let searchInputElement = document.getElementById('search-input');
 
 searchInputElement.addEventListener('keypress',function(e){
     if (e.target.value) {
       let filteredData = carsArray.filter(function(item){
            return item.make.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1;
        })
        console.log(filteredData)
        filteredData.forEach((car) => {
            let root = document.getElementById('root');
            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            h1.textContent = car.make;
            let h2 = document.createElement('h2')
            h2.textContent = car.model;
            let h3 = document.createElement('h3');
            h3.textContent = car.year;
            let image = document.createElement('img');
            image.src = car.image;
            
            div.append(h1)
            div.append(h2)
            div.append(h3)
            div.append(image)
        
           root.replaceChildren(div)
            searchInput.value = '';
        })

     } else {
         console.log('User IS not typing ..')
     }
 })
}