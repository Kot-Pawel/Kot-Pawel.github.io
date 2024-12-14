function fetchData() {
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            const strategyNameInput = document.getElementById('strategyNameId');
            strategyNameInput.value = data.strategy_name;

            const strategyKeyInput = document.getElementById('strategyKeyId');
            strategyKeyInput.value = data.strategy_name;
                   
            console.log(data);

        })
        .catch(error => {
        console.error('Error:', error);
       });
    
}