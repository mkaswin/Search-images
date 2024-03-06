const accessKey ="7gQyQzxgVaDL_z0n9lumaO8iddSGKANUE2xGi-B2NhE";
const searchform =document.getElementById("search form");
const searchbox =document.getElementById("search-box");
const searchresult =document.getElementById("search-result");
const showMorebtn =document.getElementById("show-more-btn");

let keyword ='';
let page =1;
 
async function searchImages(){
  keyword = searchbox.value;
const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
const response = await fetch(url);
const data = await response.json();

if(page === 1){
  searchresult.innerHTML ="";
}
 
const results =data.results;
results.map((result)=>{

  const image =document.createElement("img");
  image.src =result.urls.small;
  const imageLink =document.createElement("a");
  imageLink.href=result.links.html;
  imageLink.target ="_blank";
  imageLink.appendChild(image)
  searchresult.appendChild(imageLink);
})
showMorebtn.style.display="block";
}
searchform .addEventListener("submit",(e)=>{
  e.preventDefault();
  page =1;
  searchImages();
})
showMorebtn.addEventListener("click",()=>{
  page++;
  searchImages();
})