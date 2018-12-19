var Cache = {
    localStorageGet(name){
        return localStorage[name] ? JSON.parent(localStorage[name]) : ''
    },
    localStorageSet(name,key){
        localStorage.name = JSON.stringify(key)
        return true
    },
    sessionStorageGet(){
        return sessionStorage[name] ? JSON.parent(sessionStorage[name]) : ''
    }，
    sessionStorageSet(){
       sessionStorage.name = JSON.stringify(key)
        return true
    },
    cookieGet(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg)){
           return unescape(arr[2]);
        }else{
           return null;
        }
    },
    cookieSet(name,key){
        document.cookie=`${name}=`+key;
    }
}
export default Cache