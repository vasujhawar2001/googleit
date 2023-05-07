export const getRandom = (randomSongs) => {
    const randomIndex = Math.floor(Math.random() * randomSongs.length);
    return randomSongs[randomIndex];  
}