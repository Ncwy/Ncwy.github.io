var Show = document.getElementsByClassName("submit")[0];
var Name = document.getElementsByClassName("information")[0];
var Person = document.getElementsByClassName("notice")[0];
var Excitement = document.getElementsByClassName("compliments")[0];
Show.onclick = function () {
    if (Name.value === "") {
        Person.innerHTML = "Hey, you forgot to type in your name~";
    } else {
        Person.innerHTML = "Hey, " + Name.value + "";
        var collections = [" I wish I knew more people like you, you really have the ability to make people around you happy.", "You are such a joy to be around because you always make me laugh and look at things from a different perspective.", "You always make my day better when I am feeling down.", "You make everyone feel so welcome, I don't think you have ever met a stranger.", "You are so easy to be around and you always have something interesting to talk about.", "Your confidence is refreshing, and there is no question as to why you are so self-assured.", "You have such charisma that is clearly inspiring to the people with whom you interact.", "You are a loyal friend and I know I can come to you with any issues that I have without facing any judgment.", "It is always refreshing to be around you because of your authenticity and dedication to your values.", "Your positive attitude and healthy lifestyle are an inspiration."]
        var index = Math.floor(Math.random(collections.length) * 10);
        var Here = collections[index];
        Excitement.innerHTML = Here;
    };
}