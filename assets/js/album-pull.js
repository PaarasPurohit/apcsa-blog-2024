function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchData() {
  const url = 'https://musicdata-api.p.rapidapi.com/spotify/topalbums';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f9e05fed4fmshda97f8933d9e076p192198jsn5018f8cb51c3',
      'X-RapidAPI-Host': 'musicdata-api.p.rapidapi.com' // Remove the extra space here
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);  
    const table = document.getElementById('albumTable').getElementsByTagName('tbody')[0];
    
    // Rest of your code...

    
    // Select two random items from the result array
    const randomIndices = [];
    while (randomIndices.length < 2) {
      const randomIndex = getRandomInt(0, result.length - 1);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    for (const index of randomIndices) {
      const album = result[index]; // Change "artist" to "album" here
      const row = table.insertRow();
      const rankingCell = row.insertCell(0);
      const artistAndTitleCell = row.insertCell(1);
      const streamsCell = row.insertCell(2);
      const dailyCell = row.insertCell(3);
      rankingCell.innerHTML = album.ranking;
      artistAndTitleCell.innerHTML = album.artist_and_title;
      streamsCell.innerHTML = album.streams;
      dailyCell.innerHTML = album.daily;
    }
  } catch (error) {
    console.error(error);
  }
}

function submitForm() {
  // Get the user's input from the text input field
  const userInput = document.getElementById('textInput').value;

    // Create a new table row
  const newRow = document.createElement('tr');

    // Create a new table cell (column) and set its content to the user's input
  const newCell = document.createElement('td');

  // Store the user's input in the "album" variable
  const album = userInput;

  if (userInput != "") {
    newCell.textContent = userInput;

    // Append the new cell to the new row
    newRow.appendChild(newCell);

    // Get a reference to the table where you want to add the row (assuming you have a table with the ID "myTable")
    const table = document.getElementById('myTable');

    // Append the new row to the table
    table.appendChild(newRow); 
    
    fetchData();
  }
  else {
    alert("Please enter an album")
  }
  
  // Prevent the form from actually submitting
  return false;
}

// Call fetchData to populate the original table
fetchData();