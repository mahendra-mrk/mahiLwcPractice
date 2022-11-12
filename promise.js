// function checkIsSuccess(data){
//     return new Promise(function(resolve, reject){
//         if(data === "success"){
//             return resolve("successfully executed");
//         }else{
//             return reject("unsuccessfully executed")
//         }
        
//         });
// }
// checkIsSuccess('success').then(function(result){
//     //checkIsSuccess('').then(function(result){
//     console.log(result);//successfully executed
// }).catch(function(error){
//     console.error(error);//unsuccessfully executed if no success
// })


fetch('https://api.github.com/users/karkranikhil').then(function(result){
    return result.json()
}).then(function(response){
console.log(response);/*avatar_url: "https://avatars.githubusercontent.com/u/11937732?v=4"
bio: "Full Stack Javascript Developer, Salesforce Lightning Developer, Cloud, Web Performance, A11y, RWD, PWD Specialist."
blog: "https://nikhilkarkra.netlify.app/"
company: null
created_at: "2015-04-14T06:11:37Z"
email: null
events_url: "https://api.github.com/users/karkranikhil/events{/privacy}"
followers: 133
followers_url: "https://api.github.com/users/karkranikhil/followers"
following: 15
following_url: "https://api.github.com/users/karkranikhil/following{/other_user}"
gists_url: "https://api.github.com/users/karkranikhil/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/karkranikhil"
id: 11937732
location: "Melbourne, Australia"
login: "karkranikhil"
name: "nikhil karkra"
node_id: "MDQ6VXNlcjExOTM3NzMy"
organizations_url: "https://api.github.com/users/karkranikhil/orgs"
public_gists: 137
public_repos: 388
received_events_url: "https://api.github.com/users/karkranikhil/received_events"
repos_url: "https://api.github.com/users/karkranikhil/repos"
site_admin: false
starred_url: "https://api.github.com/users/karkranikhil/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/karkranikhil/subscriptions"
twitter_username: "karkra_nikhil"
type: "User"
updated_at: "2022-08-20T11:25:09Z"
url: "https://api.github.com/users/karkranikhil"
*/
})