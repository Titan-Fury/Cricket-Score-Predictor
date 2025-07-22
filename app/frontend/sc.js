document.addEventListener('DOMContentLoaded', function() {
    const teams = ['Australia', 'India', 'Bangladesh', 'New Zealand', 'South Africa', 'England', 'West Indies', 'Afghanistan', 'Pakistan', 'Sri Lanka'];
    const cities = ['Barbados', 'Auckland', 'Chandigarh', 'St Kitts', 'Wellington', 'Johannesburg', 'Dubai', 'Cardiff', 'Mirpur', 'Manchester', 'Nottingham', 'Chittagong', 'Mumbai', 'Melbourne', 'Cape Town', 'Colombo', 'Delhi', 'London', 'St Lucia', 'Birmingham', 'Hambantota', 'Southampton', 'Sydney', 'Hamilton', 'Dhaka', 'Nagpur', 'Brisbane', 'Lauderhill', 'Durban', 'Centurion', 'Christchurch', 'Trinidad', 'Pallekele', 'Adelaide', 'Abu Dhabi', 'Mount Maunganui', 'Lahore', 'Lucknow', 'Kolkata', 'Bangalore'];

    const teamSelects = document.querySelectorAll('#batting_team, #bowling_team');
    teamSelects.forEach(select => {
        teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team;
            option.textContent = team;
            select.appendChild(option);
        });
    });

    const citySelect = document.getElementById('city');
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
    });
    
    document.getElementById('predictForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = {
            batting_team: document.getElementById('batting_team').value,
            bowling_team: document.getElementById('bowling_team').value,
            city: document.getElementById('city').value,
            current_score: parseFloat(document.getElementById('current_score').value),
            overs: parseFloat(document.getElementById('overs').value),
            wickets: parseInt(document.getElementById('wickets').value),
            last_five: parseFloat(document.getElementById('last_five').value)
        };
    
        
        fetch('http://127.0.0.1:5000/predict', {
            headers : {
                'Content-Type' : 'application/json'
            },
            method : 'POST', 
            body : JSON.stringify(formData)
        })
        .then(function (response){ 
        
            if(response.ok) {  
        
                response.json() 
                .then(function(response) {
                    url = "/Users/soumyajyotibiswas/Desktop/Score Predictor Project 2/app/frontend/result.html?greeting="+response['predicted_score']+"";
                  window.open(url);
                });
            }
            else {
                throw Error('Something went wrong');
            }
        })
        .catch(function(error) {
            console.log(error);
        });

});
});
