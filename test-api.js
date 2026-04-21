import movieArt from 'movie-art';
import ytSearch from 'youtube-search-api';

async function test() {
  try {
    const poster = await movieArt('Pengabdi Setan 2');
    console.log('Poster:', poster);

    const yt = await ytSearch.GetListByKeyword('Pengabdi Setan 2 trailer', false, 1);
    console.log('Youtube ID:', yt ?. items?.[0]?.id);
  } catch (e) {
    console.error(e);
  }
}
test();
