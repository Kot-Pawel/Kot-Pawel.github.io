function fetchStrategiesData() {
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
                
            console.log(data);


            var strategy = data.strategy2;
            var dropdown = "<select name='DynamicStrategyName' id='DynamicStrategyId' class='inputValue'><option value='ADifferentStrategy'>" + strategy + "</option></select>";
            DynamicStrategyId.innerHTML = "<tr><td>" + dropdown + "</td></tr>";


            //const strategyKeyInput = document.getElementById('strategyKey');
            //strategyKeyInput.value = data.strategy_name;


        })
        .catch(error => {
        console.error('Error:', error);
       });
    
}