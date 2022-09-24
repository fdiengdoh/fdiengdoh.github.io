//Add New links here check Readme file for details
var links = [
    {link:"https://www.fdiengdoh.com/2022/04/useful-email-aliases-using-google-mail.html", title:"Useful Email Aliases using Google Mail"},
    {link:"https://youtu.be/tTNKS6CsG3o", title: "Ka Hima Lyngiong - Documentary"},
    {link: "https://youtu.be/fix8QC_rlY8", title: "Resonate Router UPS: A Review"},
    {link: "https://youtu.be/RRSOQHD1H50", title: "Meghalaya - A Bird's Eye View"},
    {link: "https://youtu.be/GmoQa8Y61TE", title: "Phe Phe Falls - Jai&ntilde;tia Hills"},
    {link: "https://www.youtube.com/playlist?list=PLnAxMOVwqslFysqxWXNin2Y2w5J2y17Od", title: "Travel Videos"},
    {link: "https://www.youtube.com/playlist?list=PLnAxMOVwqslEjju22ao-CcfceynfUpVXt", title: "Unboxing Videos"},
    {link: "https://www.youtube.com/fdphy", title: '<i class="fab fa-youtube"></i>/fdphy'},
    {link: "https://www.facebook.com/fdphy", title: '<i class="fab fa-facebook"></i>/fdphy'},
    {link: "https://www.instagram.com/fdphy", title: '<i class="fab fa-instagram"></i>/fdphy'},
    {link: "https://www.twitter.com/fdphy_in", title: '<i class="fab fa-twitter"></i>/fdphy_in'},
    {link: "https://www.fdiengdoh.com", title: "Visit My Website"},
    {link: "https://github.com/fdiengdoh/fdiengdoh.github.io", title: "GitHub Repo"}
];
var htmlLinks = "";
links.forEach(function(value){
    htmlLinks += '<a href="' + value.link + '" class="links" target="_blank">' + value.title + '</a>';
})
document.getElementById("links").innerHTML = htmlLinks;
