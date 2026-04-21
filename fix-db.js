import fs from 'fs';
import movieArt from 'movie-art';
import ytSearch from 'youtube-search-api';
import { movies } from './temp_movies.js';

async function generate() {
  const BATCH_SIZE = 5;
  const results = [...movies];
  
  for (let i = 0; i < results.length; i += BATCH_SIZE) {
    const batch = results.slice(i, i + BATCH_SIZE);
    
    await Promise.all(batch.map(async (movie) => {
      console.log(`Fetching: ${movie.title}`);
      
      // Fetch Poster
      try {
        let poster = await movieArt(movie.title);
        if (!poster || poster.includes('null')) {
           poster = await movieArt(`${movie.title} ${movie.year}`);
        }
        if (poster && typeof poster === 'string' && poster.startsWith('http')) {
           // FORCE HTTPS
           movie.img = poster.replace('http://', 'https://');
        }
      } catch (e) {
        console.error(`Error poster for ${movie.title}`);
      }

      // Fetch Youtube Trailer (Filter Shorts & Prioritize Official Channels)
      try {
        let query = `${movie.title} official trailer ${movie.year} 1080p -shorts -#shorts`;
        
        // Prioritize legal anime sources as suggested by user
        if (movie.genre === 'Anime') {
          query = `${movie.title} Muse Indonesia Ani-One Asia official trailer`;
        } else if (movie.country === 'Indonesia') {
          query = `${movie.title} official trailer film indonesia 1080p`;
        }

        const ytRes = await ytSearch.GetListByKeyword(query, false, 2);
        const ytId = ytRes?.items?.[0]?.id || ytRes?.items?.[1]?.id;
        
        if (ytId && typeof ytId === 'string' && ytId.length < 20) {
          movie.trailerId = ytId;
        }
      } catch(e) {
        console.error(`Error youtube for ${movie.title}`);
      }
      
      // Ensure backdrop is HTTPS too
      if (typeof movie.backdrop === 'string') {
        movie.backdrop = movie.backdrop.replace('http://', 'https://');
      }
      if (typeof movie.img === 'string') {
        movie.img = movie.img.replace('http://', 'https://');
      }
    }));
  }

  // Generate movies.js string
  const jsContent = `const movies = ${JSON.stringify(results, null, 2)};\n\nexport { movies };\n`;
  fs.writeFileSync('src/data/movies.js', jsContent);
  console.log('Successfully wrote src/data/movies.js');
}

generate().catch(console.error);
