function findAnagrams(words) {
    const anagramGroups = {};
  
    for (const word of words) {
      const sortedWord = word.split('').sort().join('');
      if (anagramGroups[sortedWord]) {
        anagramGroups[sortedWord].push(word);
      } else {
        anagramGroups[sortedWord] = [word];
      }
    }
  
    return Object.values(anagramGroups).filter(group => group.length > 1);
  }
  
  function findAndDisplayAnagrams() {
    const wordListInput = document.getElementById("word-list").value;
    const wordsArray = wordListInput.split(',').map(word => word.trim());
    const anagramResults = findAnagrams(wordsArray);
    const anagramOutputDiv = document.getElementById("anagram-output");
    anagramOutputDiv.innerHTML = ''; // Clear previous results
  
    if (anagramResults.length > 0) {
      anagramResults.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('anagram-group');
        groupDiv.textContent = group.join(', ');
        anagramOutputDiv.appendChild(groupDiv);
      });
    } else {
      anagramOutputDiv.textContent = "No anagrams found in the list.";
    }
  }