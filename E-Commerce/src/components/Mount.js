class Mount{
    constructor(){
        this.isMounted = false;
    }
    mount(el){
        if(this.isMounted){
            return;
        }
        if(el){
            el.appendChild(this.render());
            return;
        }
        document.body.appendChild(this.render());
        return;

    }
}

export default Mount;