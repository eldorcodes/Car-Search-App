window.onload = function () {
    // carsArray yaratamiz
    let carsArray = [
        {
            make:'Toyota',
            model:'Camry',
            year:2020,
            used:true,
            image:'images/camry.jpeg',
        
        },
        {
            make:'Honda',
            model:'Accord',
            year:2022,
            used:false,
            image:'images/accord.jpeg',
        },
        {
            make:'Lincoln',
            model:'Navigator',
            year:2022,
            used:false,
            image:'images/navigator.jpeg',
        },
        {
            make:'Tesla',
            model:'X',
            year:2021,
            used:true,
            image:'images/x.jpeg',
        
        },
        {
            make:'BMW',
            model:'X7',
            year:2022,
            used:false,
            image:'images/x7.jpeg',
        },
    ]
    console.log(carsArray)
    // handle from submit
    let form = document.getElementById('form');
    form.addEventListener('submit',function(event){
        event.preventDefault();
            let searchInput = document.getElementById('search-input');
            
            console.log(searchInput.value)
            
            carsArray.forEach((car) => {
                if (car.make.toUpperCase() === searchInput.value.toUpperCase()) {
                    console.log(car)
                    let root = document.getElementById('root');
                    let h1 = document.createElement('h1');
                    h1.textContent = car.make;
                    let h2 = document.createElement('h2');
                    h2.textContent = car.model;
                    let h3 =document.createElement('h3');
                    h3.textContent = car.year;
                    let image = document.createElement('img');
                    image.src = car.image;


                    root.append(h1)
                    root.append(h2)
                    root.append(h3)
                    root.append(image)

                    searchInput.value = ''
                }
            })
        })
        
}