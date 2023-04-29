//your code here
let UserData={}
const handleGetUser=async()=>{
	document.getElementById("content").style.display="none";
	let user= await fetch("https://randomuser.me/api/");
	let userData=await user.json();
	UserData=userData.results[0];
	document.getElementById("image").src=UserData.picture.large;
	let fullName=UserData.name.first+" "+UserData.name.last;
	document.getElementById("userName").innerText=fullName;

}
const handleAge=()=>{
	document.getElementById("content").innerHTML=UserData.dob.age;
	document.getElementById("content").style.display="block";
}
const handleEmail=()=>{
	document.getElementById("content").innerHTML=UserData.email;
	document.getElementById("content").style.display="block";
}
const handlePhone=()=>{
	document.getElementById("content").innerText=UserData.phone;
	document.getElementById("content").style.display="block";
}
console.log(UserData)
