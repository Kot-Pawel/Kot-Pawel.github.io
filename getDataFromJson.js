function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Process the data retrieved from the JSON file
            console.log(data);
            // Perform any additional operations with the data
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
