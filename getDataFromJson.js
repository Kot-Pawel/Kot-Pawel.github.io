function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            
            //const strategyNameInput = document.getElementById('StrategyName');
            //strategyNameInput.value = data.strategy_name;

            var test = data.strategy_name;
            document.getElementById('StrategyName').value = test;

            //const strategyKeyInput = document.getElementById('StrategyKey');
            //strategyKeyInput.value = data.strategy_name;

            console.log(data);
            
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
