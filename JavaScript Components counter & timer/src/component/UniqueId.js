const generateUniqueId = (str) =>{
    const {prefix} = str;
    if (prefix){
        return prefix + "-" + Math.random().toString(36).substring(2);
    }
    return Math.random().toString(36).substring(2);
};

export{generateUniqueId};