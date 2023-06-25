function fetchData() {
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            const strategyNameInput = document.getElementById('strategyName');
            strategyNameInput.value = data.strategy_name;

            const strategyKeyInput = document.getElementById('strategyKey');
            strategyKeyInput.value = data.strategy_name;
                   
            console.log(data);

        })
        .catch(error => {
        console.error('Error:', error);
       });
    
}