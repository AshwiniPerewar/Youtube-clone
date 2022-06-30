fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&q=trending&key=AIzaSyD6wf5OgENliSeGgtsh6KTz3XdYfCdWeBY')
.then(function(res)
{
    return(res.json());
})
.then(function(res){
    console.log(res)
    trending(res.items);
})

const trending=(list1)=>{
    {
   
        list1.forEach(({id:{playlistId},snippet:{title},snippet:{thumbnails}})=>{
        {
    let div=document.createElement("div");
    let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${playlistId}`;
        iframe.width="100%";
        iframe.height="400px";
        iframe.allow="fullscreen";
        
        let name=document.createElement("h5");
        name.innerText=title;
   
        div.append(iframe,name);
        document.querySelector("#list").append(div);
        
}
}
)}
}

const searchMovies=async()=>{
try{

    const q=document.querySelector("#query").value;
const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${q}%202&key=AIzaSyD6wf5OgENliSeGgtsh6KTz3XdYfCdWeBY`);
const data=await res.json();

console.log(data.items)

append(data.items)
}
catch(err){
    console.log(err);

}
}

const append=(videos)=>{
    let showVideos=document.querySelector("#videos");
    
    document.querySelector("#videos").innerHTML=null;

    videos.forEach(({id:{videoId},snippet:{thumbnails},snippet:{title}})=>{
    {

        let div=document.createElement("div");
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${thumbnails}`;
        iframe.width="100%";
        iframe.height="100%";
        iframe.allow="fullscreen";
        
        let name=document.createElement("h5");
        name.innerText=title;
   
        div.append(iframe,name);
        
        
        let data={
            title,
            videoId,
        };

        div.onclick=()=>
        {
            showVideo(data);
        }


        showVideos.append(div);

    }
}
    )
}

const showVideo=(data)=>
{
    window.location.href="videos.html";
    localStorage.setItem("video",JSON.stringify(data));
}