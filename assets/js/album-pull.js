function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchData() {
  const url = 'https://musicdata-api.p.rapidapi.com/spotify/topalbums';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f9e05fed4fmshda97f8933d9e076p192198jsn5018f8cb51c3',
      'X-RapidAPI-Host': 'musicdata-api.p.rapidapi  .com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse the JSON response
    console.log(result);  
    const table = document.getElementById('albumTable').getElementsByTagName('tbody')[0];
    
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

// Call the fetchData function to initiate the API request
fetchData();