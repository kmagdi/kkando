export class Helper {
    static scrollToTop = () => {
        document.querySelector('html').setAttribute('smooth','false');
        window.scrollTo(0,0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if(navigator.userAgent.search("Firefox")  > -1){
            if(document.documentElement.scrollTop !== 0){
                document.location.href = "#top";
            }
        }
        document.getElementsByTagName('html')[0].setAttribute('smooth','true');
    };
    static isMobile = () => (window.innerWidth<=991);
    static getMODI = (desktopfile,mobilefile) => (this.isMobile()?mobilefile:desktopfile);
    static isVowel = (x) => /[aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ]/.test(x);
}