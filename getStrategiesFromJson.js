function fetchStrategiesData() {
    
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
                
            var dropdown = "<select name='DynamicStrategyName' id='DynamicStrategyId' class='inputValue'>";

            for (let i = 0; i < data.strategies.length; i++) {
                const element = data.strategies[i];
                var dropdown = dropdown + "<option value='Strategy" + [i] + "'>" + element + "</option>";
            }

            var dropdown = dropdown + "</select>";
            DynamicStrategyId.innerHTML = "<tr><td>" + dropdown + "</td></tr>";

        })
        .catch(error => {
        console.error('Error:', error);
       });
    
}
