import { fetchOBA } from  './modules/fetch.js';
import { toggleBookmark } from './modules/saveEvent.js'

fetchOBA("kookboeken conditietraining","&facet=Type(book)", ".Kookboeken");
fetchOBA("sport en voeding", "&facet=Type(book)", ".Algemeen");
fetchOBA("suiker", "&facet=Type(audiobook)", ".Suikers");
fetchOBA("eiwitten", "&facet=Type(book)", ".Eiwitten");

toggleBookmark();