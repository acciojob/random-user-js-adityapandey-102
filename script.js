//your code here
let UserData={}
const handleGetUser=()=>{
	let user= await fetch("https://randomuser.me/api/");
	let userData=await user.json();
	console.log(userData);
	UserData=userData;
	document.getElementById("image").innerURL=UserData.image;
	document.getElementById("userName").innerText=UserData.name;

}
const handleAge=()=>{
	document.getElementById("content").innerText=UserData.age;
}
const handleEmail=()=>{
	document.getElementById("content").innerText=UserData.email;
}
const handlePhone=()=>{
	document.getElementById("content").innerText=UserData.Phone;
}
